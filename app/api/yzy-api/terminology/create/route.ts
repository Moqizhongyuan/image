import { NextResponse } from "next/server";

export async function POST(): Promise<Response> {
  console.log("terminology create");
  return new NextResponse(
    JSON.stringify({
      code: 0,
      message: "",
      result: {
        terminology: "938504a1-d5ce-47f8-9bb9-4484a06d720b",
      },
    }),
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}
