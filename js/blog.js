// ============================================
// BLOG MODAL
// ============================================

const BLOG_POSTS = {
  'ai-right': {
    tag: 'AI & Productivity',
    title: "You're Using AI — Are You Using It Right?",
    date: 'Recently published',
    body: `
      <p>AI tools are everywhere. ChatGPT, Claude, Copilot, Gemini — every developer, designer, writer, and student now has a powerful assistant a click away. But here's the question almost no one is honestly asking themselves:</p>
      <p><strong>Are you actually using AI right, or just using it?</strong></p>
      <img src="images/blogs/agentai_1.svg" alt="AI Tools Overview" class="blog-modal-img" />
      <h3>The Lazy Way vs The Smart Way</h3>
      <p>Most people treat AI like a magic answer machine. They type a vague question, accept whatever comes out, and ship it. The result? Mediocre output, recycled ideas, and a slow erosion of their own thinking muscles.</p>
      <p>The smart way is different. The smart way uses AI as a thinking partner — a tireless collaborator that helps you sharpen ideas, explore alternatives, and accelerate execution. The output is still <em>yours</em>, but better.</p>
      <h3>What I've Learned After Using AI Daily</h3>
      <p>As an Android engineer who has been integrating AI into my daily workflow for over a year, here are the patterns that actually work:</p>
      <p><strong>1. Be specific about context.</strong> "Write me a function" gets garbage. "Write me a Kotlin function using coroutines and Retrofit2 that fetches user profiles, with retry logic and proper error handling for our MVVM ViewModel" gets gold.</p>
      <p><strong>2. Iterate, don't accept the first answer.</strong> The first response is rarely the best. Push back. Ask "what's a cleaner way?" or "what edge cases am I missing?" The second and third iterations are where the real value lives.</p>
      <p><strong>3. Use AI to challenge your thinking, not replace it.</strong> Before I write a complex feature, I describe my plan to AI and ask it to poke holes in it. Half the time, it catches something I missed. The other half, defending my approach makes my thinking sharper.</p>
      <p><strong>4. Keep your own voice.</strong> If you blog, write code comments, or send proposals — the moment your work sounds like AI, it loses trust. Use AI for structure and ideas, but rewrite in your voice.</p>
      <img src="images/blogs/agentai_2.svg" alt="AI Workflow" class="blog-modal-img" />
      <h3>The Trap to Avoid</h3>
      <p>The biggest danger isn't AI making mistakes — it's AI making you complacent. If you stop reading docs because AI summarizes them, stop debugging because AI suggests fixes, stop thinking because AI thinks for you — you're not getting more productive. You're getting dependent.</p>
      <p>The developers who will dominate the next decade aren't the ones who use AI the most. They're the ones who use it <em>most intentionally</em>.</p>
      <h3>Final Thought</h3>
      <p>AI is a power tool. Power tools don't make you a craftsman — knowing when, where, and how to use them does. Get good at the question, the iteration, the judgment. The tool is just the tool.</p>
      <p>So — are you using AI, or are you using it right?</p>
    `
  }
};

function openBlogModal(postId) {
  const post = BLOG_POSTS[postId];
  if (!post) return;
  
  const modal = document.getElementById('blogModal');
  document.getElementById('modalTag').textContent = post.tag;
  document.getElementById('modalTitle').textContent = post.title;
  document.getElementById('modalMeta').textContent = post.date;
  document.getElementById('modalBody').innerHTML = post.body;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeBlogModal() {
  document.getElementById('blogModal').classList.remove('open');
  document.body.style.overflow = '';
}

// Close on background click
document.addEventListener('click', (e) => {
  const modal = document.getElementById('blogModal');
  if (e.target === modal) closeBlogModal();
});

// Close on ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeBlogModal();
});
