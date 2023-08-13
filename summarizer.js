async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({"inputs": "Children’s drawings have a wonderful inventiveness, creativity, and variety to them. We present a system that automatically animates children’s drawings of the human figure, is robust to the variance inherent in these depictions, and is simple and straightforward enough for anyone to use. We demonstrate the value and broad appeal of our approach by building and releasing the Animated Drawings Demo, a freely available public website that has been used by millions of people around the world. We present a set of experiments exploring the amount of training data needed for finetuning, as well as a perceptual study demonstrating the appeal of a novel twisted perspective retargeting technique. Finally, we introduce the Amateur Drawings Dataset, a first-of-its-kind annotated dataset, collected via the public demo, containing over 178,000 amateur drawings and corresponding user-accepted character bounding boxes, segmentation masks, and joint location annotations."}).then((response) => {
	console.log(JSON.stringify(response));
});