//LoginUserProviderで作成したContextの値を参照いくためのカスタムhooksとして用意
import { useContext } from "react";
import { LoginUserContext } from "../providers/LoginUserProvider";

//useContextを返す　useContextの値を扱っていく
//これでコンポーネント側からuseLoginUserを呼ぶだけでContextの値を参照できる
//LoginUserProviderコンポーネントの中の　createContextから生成されたLoginUserContextを引数にとる
export const useLoginUser = () => useContext(LoginUserContext);
