import { Routes, Route } from "react-router-dom";
import { Main } from "../src/Pages/Main";
import { NotFound } from "./Pages/not-found";
import { About } from "../src/Pages/About";
import { Profile } from "./Pages/Profile";
import { Account } from "./Pages/account";
import { Wallet } from "./Pages/wallet";
import { ProtectedRoute } from "./Components/protected-route/indes";
export const AppRoutes = ({user}) => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/account" element={<Account />} />
        <Route path="/wallet" element={<Wallet />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
