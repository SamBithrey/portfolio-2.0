import { groq } from "next-sanity";
import { sanityClient } from "../../../../sanity";
import { NextResponse } from "next/server";
import { Experience } from "@/typings";

const query = groq`
    *[_type == "experience"] | order(dateStarted desc){
        ...,
        technologies[]->
    }
`

export async function GET() {
    const experience: Experience[] = await sanityClient.fetch(query)
    return NextResponse.json({ experience })
}