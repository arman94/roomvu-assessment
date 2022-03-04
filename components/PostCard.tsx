import Link from "next/link";
import { FC } from "react";

import { IPostDetails } from "../types";

const PostCard: FC<IPostDetails> = ({ body, title, id, userId }) => {
  return (
    <article className="flex flex-col items-start justify-start gap-3 mt-14">
      <header>
        <Link href={`/${id}`}>
          <a>
            <h3 className="dark:text-darkPink text-[28px] font-black leading-[30px] font-sans text-pink mb-[0.4375rem] my-0">
              {title}
            </h3>
          </a>
        </Link>
      </header>
      <p className="dark:text-white dark:text-opacity-80 font-normal font-serif leading-[18px] text-base">
        {body.slice(0, 40)}...
      </p>
    </article>
  );
};

export default PostCard;
