import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(request:NextRequest,{params}:{params:{id:string;}}){
    const id=params.id;
    
    const post =await prisma.post.delete({
        where:{id}
    })

    return NextResponse.json(post)
}