// utils/query.ts

export async function query(data: any) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
        {
            headers: { Authorization: `Bearer ${process.env.HF_KEY}` },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    return await response.json();
}
