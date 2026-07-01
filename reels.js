/*
    =================================================================
   NIDHI GOLD — REELS LIST (optional external file)
   =================================================================
   This is the "one small file you keep adding to" version.
 
   HOW TO TURN IT ON:
     1) Keep this file (reels.js) in the SAME folder as index.html
     2) In index.html, find this line near the bottom and REMOVE the
        comment wrapper so it becomes active:
            <script src="reels.js"></script>
     3) Done. Whatever is in the list below now controls the reels.
        (If this file is loaded, it OVERRIDES the inline list in the HTML.)
 
   HOW TO ADD A VIDEO:
     Copy one line, paste it, change the 3 values. Keep the comma.
 
     id      = the YouTube VIDEO ID (works for normal videos AND Shorts)
                 youtu.be/aqz-KE-bpKQ            -> id: "aqz-KE-bpKQ"
                 youtube.com/watch?v=aqz-KE-bpKQ -> id: "aqz-KE-bpKQ"
                 youtube.com/shorts/aqz-KE-bpKQ  -> id: "aqz-KE-bpKQ"
     handle  = the bold label line (creator / topic)
     caption = one line under the handle
   ================================================================= 
   */

window.NIDHI_REELS = [
  {
    id: "Hc7x4QbJnkM",
    handle: "@nidhigold",
    caption:
      "From log to sheet — a quick tour inside Nidhi Gold's manufacturing",
  },
  {
    id: "F4AXVQD38-E",
    handle: "@nidhigold",
    caption: "Why choose marine grade? We put it to the test.",
  },
  {
    id: "QhJpJctikek",
    handle: "@nidhigold",
    caption: "Inside the hot-press line 🔥",
  },
  {
    id: "Sg8GfbexwKs",
    handle: "@nidhigold",
    caption: "Book-matched veneer, done by hand",
  },
  {
    id: "8zHtFfLez44",
    handle: "@nidhigold",
    caption: "Plywood which makes your home look beautiful 🔥",
  },
  // 👇 paste your own uploads below this line
  // { id: "PASTE_ID_HERE", handle: "@name", caption: "Your caption" },
];
