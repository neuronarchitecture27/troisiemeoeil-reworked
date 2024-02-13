import getSlug from "@/app/utils/getSlug";
import { createClient } from "@/config/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
    console.log("hello mom");
    let response;
    try {
        const cookieStore = cookies(request.headers);
        const supabase = createClient(cookieStore);
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");
        console.log(id, "sup");
        if (id) {
            response = await supabase.from("blogs").select().eq("slug_url", id).single();
            if (!response) {
                return new Response("Blog not found", { status: 404 });
            }
        } else {
            response = await supabase.from("blogs").select().limit(20);
        }

        return NextResponse.json(response);
    } catch (error) {
        console.error("Error fetching data:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}