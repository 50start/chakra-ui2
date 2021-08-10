import React, { memo } from "react";
import { Switch, Route } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Router = memo(() => {
  return (
    <Switch>
      {/**ルーテイングの分岐をしていくため記述 */}　
      <LoginUserProvider>
        {/**Switchの前後にLoginUserProviderを囲う */}　
        <Route exact path="/">
          {/**　ルートパスでLogin画面を表示 */}
          <Login />
        </Route>
        <Route
          path="/home"
          render={(
            { match: { url } } //**<Route>で囲っていく代わりにrender関数を使う アロー関数で返却する()の中に処理を記述 //この中に /home配下のルーティングを設定する <Switch>で囲う　この中でhomeRoutesをmapで展開するルーテングを記述
          ) => (
            <Switch>
              {homeRoutes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  {/**それぞれの画面をレンダリングしている部分でHeaderLayoutで囲う */}
                  <HeaderLayout>{route.children}</HeaderLayout>
                </Route>
              ))}
            </Switch>
          )}
        />
      </LoginUserProvider>
      <Route path="*">
        {" "}
        {/**404pageは</LoginUserProvider> の枠外に表示*/}
        <Page404 />
      </Route>
    </Switch>
  );
});
