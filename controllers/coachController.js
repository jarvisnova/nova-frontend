// controllers/coachController.js

exports.getCoachSuggestions = (req, res) => {
  const suggestions = [
    {
      type: "Voice Style",
      idea: "Use a bold, confident tone with fast transitions",
      trending: true,
    },
    {
      type: "Video Format",
      idea: "Split-screen reels with reaction + explanation",
      trending: true,
    },
    {
      type: "Desi Hack",
      idea: "Use trending audio with a regional twist (Bhojpuri, Haryanvi)",
      trending: true,
    },
    {
      type: "Hashtag Strategy",
      idea: "#relatable #viralshorts #bhabhivibes",
      trending: false,
    }
  ];

  res.status(200).json({ success: true, suggestions });
};
