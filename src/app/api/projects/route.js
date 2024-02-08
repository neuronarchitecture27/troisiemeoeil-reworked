import { createClient } from "@/config/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
    let response
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const {searchParams} = new URL(request.url)
    const id = searchParams.get("id")
    if (id) {
    response = await supabase.from("projects").select().eq("id", id).single()
    }
    else {
        //get all data
        response = await supabase.from("projects").select().limit(20).order('id', { ascending: false })
    }
    // const data = await request.json();
    
    return NextResponse.json(response)
}