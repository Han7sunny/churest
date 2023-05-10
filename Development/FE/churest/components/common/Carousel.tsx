import React from 'react';
import { images } from '@/public/assets/images';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import moment from 'moment';
import Image from 'next/image';

SwiperCore.use([EffectCoverflow, Pagination]);

type Props = {
  cardType: string;
  info: any;
};

const Carousel = ({ cardType, info }: Props) => {
  // 태그된 추억 퍼가기
  const clickTakeTree = (boardId: number) => {
    console.log(
      '퍼가기 버튼 누름, boardId 같이 넘겨서 본인 숲으로 가야함' + boardId
    );
    // redirect ?
  };

  return (
    <>
      <div>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          className="mySwiper"
        >
          {info.map((item: any, idx: number) => {
            return (
              <SwiperSlide
                key={idx}
                className={
                  cardType == 'mypage' || 'myTagged'
                    ? 'gray-clay center'
                    : 'inside-circle'
                }
              >
                {/* 마이페이지에서 추억 리스트 조회 */}
                {cardType == 'mypage' ? (
                  <div className="mypage-box">
                    <Image
                      src={images.my_tree_img}
                      alt=""
                      width={150}
                      height={150}
                    />
                    <div className="text-content">
                      <p className="title">{item.title}</p>
                      <p className="date">
                        {moment(item.createdTime).format('YYYY년 MM월 DD일')}
                      </p>
                    </div>
                  </div>
                ) : cardType == 'myTagged' ? (
                  // 태그된 추억 조회
                  <div className="mypage-box">
                    <Image
                      src={images.my_tree_img}
                      alt=""
                      width={150}
                      height={150}
                    />
                    <div className="text-content">
                      <p className="title">{item.title}</p>
                      <p className="date">
                        {moment(item.createdTime).format('YYYY년 MM월 DD일')}
                      </p>
                    </div>
                    <button
                      className="green-btn"
                      onClick={() => clickTakeTree(item.boardId)}
                    >
                      퍼가기
                    </button>
                  </div>
                ) : (
                  // 나의 새 조회
                  <div style={{ margin: '0 auto', height: '200px' }}>
                    <div>
                      <Image
                        src={images['bird_' + item.memberBirdId + '_img']}
                        alt=""
                        layout="fill"
                        object-fit
                      />
                    </div>
                    <p>{item.nickname}</p>
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <style jsx>
        {`
          img {
            display: block;
            margin: 0 auto;
          }
          p {
            font-size: 15px;
            text-align: center;
          }
          .date {
            font-size: 13px;
            color: gray;
          }
          .hide {
            display: none;
          }
          .mypage-box {
            display: flex;
            flex-direction: column;
            width: 260px;
            height: 300px;
            justify-content: center;
            align-items: center;
          }
          .text-content {
            margin-top: 25px;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          button {
            margin: 10px;
            height: 30px;
          }
        `}
      </style>
    </>
  );
};

export default Carousel;
