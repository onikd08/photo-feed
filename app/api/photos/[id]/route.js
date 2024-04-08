import { getPhotoById } from "@/lib/image-data";
import { NextResponse } from "next/server";

export const GET = async (_request, { params }) => {
  const data = getPhotoById(params.id);
  return NextResponse.json(data);
};
