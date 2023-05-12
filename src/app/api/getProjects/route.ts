import { groq } from "next-sanity";
import { sanityClient } from "../../../../sanity";
import { NextResponse } from "next/server";
import { Projects } from "@/typings";

const query = groq`
    *[_type == "project"]
`;

export async function GET() {
  const projects: Projects[] = await sanityClient.fetch(query);
  return NextResponse.json({ projects });
}
