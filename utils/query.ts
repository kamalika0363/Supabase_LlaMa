// utils/query.ts

export async function query(data: any) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
        {
            headers: { Authorization: "Bearer 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" },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    return await response.json();
}
