export default function BlogPostPage({ params }) {
    return (
        <main>
            <h1> Blog Post 1 </h1>
            <p> {params.postId} </p>
        </main>
    );
}
