export function CreatePost() {
  return (
    <form method="POST">
      <input type="text" name="body" placeholder="enter your message here" />
      <input type="hidden" name="hidden" value="This is a hidden field" />
      <button>send</button>
    </form>
  );
}
