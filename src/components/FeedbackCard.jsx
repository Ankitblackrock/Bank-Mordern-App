import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img
      src={quotes}
      alt="quotes"
      className="w-[42px] h-[27px] object-contain"
    />
    <p className="font-popins font-normal text-[18px] leading-[32px] text-white my-10">
      {content}
    </p>
    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48] rounded-full" />
    </div>
    <div className="flex flex-col ml-4">
      <h4 className="font-popins font-semibold text-[20px] leading-[32px] text-white">
        {name}
      </h4>
      <p className="font-popins font-normal text-[16px] leading-[24px] text-dimWhite">
        {title}
      </p>
    </div>
  </div>
);

export default FeedbackCard;
