import { groq } from "next-sanity";
import { sanityClient } from "../../../../sanity";
import { NextResponse } from "next/server";
import { SkillType } from "@/typings";

const query = groq`
    *[_type == "skill"]
`;

export async function GET() {
  const skills: SkillType[] = await sanityClient.fetch(query);
  return NextResponse.json({ skills });
}
