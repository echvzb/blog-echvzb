import React from "react";
import {
  TelegramShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";

const shareBtn = "share-btn";

export default ({ url, shareTxt }) => (
  <div className="share">
    <h2 className="share-txt">{shareTxt}</h2>
    <div className="share-btns">
      <FacebookShareButton url={url} className={shareBtn}>
        <i className="bi bi-facebook icon" />
      </FacebookShareButton>
      <TelegramShareButton url={url} className={shareBtn}>
        <i className="bi bi-telegram icon" />
      </TelegramShareButton>
      <TwitterShareButton url={url} className={shareBtn}>
        <i className="bi bi-twitter icon" />
      </TwitterShareButton>
      <WhatsappShareButton url={url} className={shareBtn}>
        <i className="bi bi-whatsapp icon" />
      </WhatsappShareButton>
      <EmailShareButton url={url} className={shareBtn}>
        <i className="bi bi-envelope-fill icon" />
      </EmailShareButton>
    </div>
  </div>
);
