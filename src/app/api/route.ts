import { getProducts } from "app/services/shopify/products";

export async function GET(){
    const products = await getProducts();
    return Response.json({ products })
}

/*
export async function POST(){
    const message = "POST";
    return Response.json({ message })
}

export async function DELETE(){
    const message = "DELETE";
    return Response.json({ message })
}

export async function PUT(){
    const message = "PUT";
    return Response.json({ message })
}

export async function PATCH(){
    const message = "PATCH";
    return Response.json({ message })
}
*/