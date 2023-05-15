import Image from 'next/image';
import { images } from '@/public/assets/images';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import { useState } from 'react';

type Props = {
  plusStep(): void;
  step: number;
  plusPage(): void;
  minusPage(): void;
  page: number;
};

export default function PickTree({
  plusStep,
  step,
  plusPage,
  minusPage,
  page,
}: Props) {

  const treeInfo = [
    {name:"나무1", desc:"나무1임; 유태야 해줘"}, {name:"나무2", desc:"나무2임; 유태야 해줘"}, {name:"나무3", desc:"나무3임; 유태야 해줘"}, 
    {name:"나무4", desc:"나무4임; 유태야 해줘"}, {name:"나무5", desc:"나무5임; 유태야 해줘"}, {name:"나무6", desc:"나무6임; 유태야 해줘"},
    {name:"나무7", desc:"나무7임; 유태야 해줘"}, {name:"나무8", desc:"나무8임; 유태야 해줘"}, {name:"나무9", desc:"나무9임; 유태야 해줘"},   
  ];


  return (
    <div className="inputBox">
      <div className="left left-add">
        <div className="box">
          <div className="tree-title">
            <p>어떤 나무를 심을건가요?</p>
          </div>
          <div className="tree-selector">
            <div
              className={page == 1 ? 'arrow-disabled' : 'arrow'}
              onClick={minusPage}
            >
              <MdOutlineArrowBackIos />
            </div>
            <div className="tree-img">
              <Image
                src={images[`tree_${page}_img`]}
                width={280}
                height={340}
                alt=""
              />
            </div>
            <div
              className={page == 9 ? 'arrow-disabled' : 'arrow'}
              onClick={plusPage}
            >
              <MdOutlineArrowForwardIos />
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="box">
          <div>
            <div className="name-box">
              <p className="name-class">이름 :</p>
              <p className="tree-info">{treeInfo[page-1].name}</p>
            </div>
            <div className="name-box">
              <p className="name-class">설명 :</p>
              <p className="tree-info">
                {treeInfo[page-1].desc}
              </p>
            </div>
          </div>
          <button onClick={plusStep} className="submitBtn">
            나무 선택
          </button>
        </div>
      </div>
      <style jsx>{`
        .tree-selector {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .arrow {
          font-size: 24px;
          cursor: pointer;
          font-weight: 700;
        }
        .arrow-disabled {
          font-size: 24px;
          color: rgb(148, 148, 148);
          font-weight: 700;
        }
        .box {
          height: 100%;
          padding-top: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .tree-title {
          font-size: 24px;
          font-weight: 600;
          color: #8b80ca;
          margin-bottom: 75px;
        }
        .name-box {
          width: 100%;
          display: flex;
          margin-bottom: 40px;
        }
        .name-class {
          font-size: 24px;
          font-weight: 600;
          color: #8b80ca;
          width: 70px;
        }
        .tree-info {
          font-size: 24px;
          font-weight: 600;
          color: #000000;
          width: 250px;
        }
        .right .box {
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
}
