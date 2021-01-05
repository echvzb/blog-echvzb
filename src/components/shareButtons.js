import React from 'react';
import { VKShareButton, TelegramShareButton, FacebookShareButton, TwitterShareButton, WhatsappShareButton, EmailShareButton } from 'react-share';

const shareBtn = 'share-btn';


export default ({ url }) =>
    <div className='share'>
        <h2 className='share-txt'>Compartir</h2>
        <div className='share-btns'>
            <FacebookShareButton
                url={url}
                className={shareBtn}
            >
                <i class="fab fa-facebook-f" />
            </FacebookShareButton>
            <TelegramShareButton
                url={url}
                className={shareBtn}
            >
                <i class="fab fa-telegram-plane" />
            </TelegramShareButton>
            <TwitterShareButton
                url={url}
                className={shareBtn}
            >
                <i class="fab fa-twitter" />
            </TwitterShareButton>
            <WhatsappShareButton
                url={url}
                className={shareBtn}
            >
                <i class="fab fa-whatsapp" />
            </WhatsappShareButton>
            <EmailShareButton
                url={url}
                className={shareBtn}
            >
                <i class="fas fa-envelope" />
            </EmailShareButton>
            <VKShareButton
                url={url}
                className={shareBtn}
            >
                <i class="fab fa-vk" />
            </VKShareButton>
        </div>
    </div>