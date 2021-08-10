import { useState, useCallback } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useMessage } from "../hooks/useMessage";
import { useLoginUser } from "../hooks/useLoginUser";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage(); //useMessageからインポート returnされた関数{showMessage}を定義
  //更新するのでsetLoginUserをセット　setLoginUserはLoginUserProviderからuseLoginUser.js経由でインポート
  const { setLoginUser } = useLoginUser();
  const [loading, setLoding] = useState(false);
  //Login機能を提供する axiosでAPiデーターを取得
  const login = useCallback(
    (id) => {
      //idを引数
      setLoding(true);
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`) //テキストBOXで入力したid
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false; //idが10の場合true
            setLoginUser({ ...res.data, isAdmin }); //新しくオブジェクトを定義 スクレプト構文でオブジェクトの中身をもう一回設定して、プラス追加でisAdminを渡す
            showMessage({ title: "ログインしました", status: "success" }); //ログインに成功できたらこのメッセージ
            //dataが存在すればhomeの画面に遷移する
            history.push("/home");
          } else {
            //取得できなかったのでエラー
            showMessage({ title: "ユーザーが見つかりません", status: "error" });
            setLoding(false);
          }
        })
        .catch(() => {
          showMessage({ title: "ログインできません", status: "error" });
          setLoding(false);
        });
    },
    [history, showMessage, setLoginUser]
  );
  //カスタムhooksとしてloginを返す
  return { login, loading };
};
