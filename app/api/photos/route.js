import { getAllPhotos } from "@/lib/image-data";
import { NextResponse } from "next/server";

export const GET = async (_request) => {
  const data = getAllPhotos();
  return NextResponse.json(data);
};
