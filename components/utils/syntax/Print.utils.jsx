export default function Print(props) {
  return (
    <>
      <span className="text-[#c7a06f]">print</span>(Skills.
      <span className="text-[#c17ac8]">{props.method}</span>){" "}
      {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
      <span className="text-[#6d6d6d]"># {props.comment}</span>
      <br />
      <br />
    </>
  );
}
