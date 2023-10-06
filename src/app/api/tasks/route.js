import { pool } from "@/config/db";
import { NextResponse } from "next/server";

// traer todas las tareas
export async function GET() {
  try {
    const results = await pool.query("SELECT * FROM tasks");
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      {
        status: 500,
      }
    );
  }
}

// crear tareas
export async function POST(request) {
  try {
    const { title, description } = await request.json();
    console.log(title, description);

    const result = await pool.query("INSERT INTO tasks SET ?", {
      title,
      description,
    });

    return NextResponse.json({ title, description: result.insertId });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      {
        status: 500,
      }
    );
  }
}
