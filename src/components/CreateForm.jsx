import { useState } from "react";

function CreateForm({addTodo}) {

  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    // form被submit時，瀏覽器的預設行為是重新整理網頁，這樣會造成網頁閃爍且todo list沒有被加入。
    // 因此可以用event object中的preventDefault方法，用來取消一個event的"預設行為"
    e.preventDefault();
    addTodo(content);
    // 清空input的內容
    setContent('');
  }

  return (
    // 由於button的type被設定成submit，因此不需要給button監聽點擊事件，點擊按鈕時form的onSubmit也會被觸發
    <form className="create-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="輸入代辦事項"
        // 如果只有寫value={content}，則value會一直等於content的初始值，也就是''。
        // 因此要用input的onChange屬性。他會在input的值發生改變時執行，我們可以用onChange屬性來更改state的內容
        value={content}
        // 如何取得用戶輸入資訊？可以用"event object" e，裡面會存放用戶輸入資訊 (e.target.value)。
        onChange={(e) => {setContent(e.target.value);}
        // 以上這種把state跟input結合的方式，稱為two-way binding (雙向綁定)。
        // 意思就是，當UI發生改變時，state也就跟著改變。
        // 同樣的，當state發生改變時，UI也會跟著改變。
        } />
      <button type="submit">加入</button>
    </form>
  );
}

export default CreateForm