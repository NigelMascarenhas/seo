export default function Head() {
  return (
    <>
      <title>VisionX Technologies</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      {/* <meta name="description" content="Built with Next.js and TypeScript" /> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-PM15S41XVE">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PM15S41XVE');
</script>
      <link rel="icon" href="/images/favicon.ico" />
    </>
  );
}
