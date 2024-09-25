const colors = [
  { bg: "#cbd5e1", text: "#334155" },
  { bg: "#d4d4d8", text: "#52525b" },
  { bg: "#fef08a", text: "#ca8a04" },
  { bg: "#d9f99d", text: "#16a34a" },
  { bg: "#bae6fd", text: "#0284c7" },
  { bg: "#f5d0fe", text: "#c026d3" },
  { bg: "#fed7aa", text: "#f97316" },
  { bg: "#a5f3fc", text: "#0891b2" },
];
let index = 0;
const PlaceHolder = ({ size, placeholderText }) => {
  const currentIndex = index++ % colors.length;

  const bgColor = colors[currentIndex]?.bg;
  const textColor = colors[currentIndex]?.text;
  console.log(bgColor, textColor);

  return (
    <span
      className={`placeholder ${size}`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {placeholderText}
    </span>
  );
};

export default PlaceHolder;
