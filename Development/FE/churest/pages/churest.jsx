import LetterBox from '../components/churest/LetterBox';
import ItemShop from '../components/churest/ItemShop';
import NewBird from '../components/churest/NewBird';
import MyBird from '../components/churest/MyBird';
import MyPage from '../components/churest/MyPage';
import ChureeCreate from '../components/churest/memory';

export default function churest() {
  return (
    <>
      <div className="">안녕하떼용 여기는 마이 츄레스트입니다</div>
      <ChureeCreate></ChureeCreate>
      <MyPage></MyPage>
      <MyBird></MyBird>
      <LetterBox></LetterBox>
      <ItemShop></ItemShop>
      <NewBird></NewBird>

      <style jsx>{``}</style>
    </>
  );
}
