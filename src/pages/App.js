import { Card, Gap, StyledLink } from "../components";
import { Layout } from "antd";
import "./App.scss";
import Afrizal from "../assets/afrizal.jpg";
import Mulazi from "../assets/mulazi.jpg";

const { Header, Content, Footer } = Layout;
const today = new Date();
const year = today.getFullYear();

function App() {
  return (
    <Layout className="main-page">
      <Header className="navbar">
        <p className="title">Kelompok 30</p>
        <div className="link-wrapper">
          <StyledLink label="Home" href="#" />
          <Gap width={20} />
          <StyledLink label="Product" href="#" />
        </div>
      </Header>
      <Content className="content">
        <Card nama="Afrizal Bagas S." nim="21120117130075" photo={Afrizal} />
        <Card nama="Mulazi" nim="21120117120077" photo={Mulazi} />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        @{year} Created by Kelompok 30
      </Footer>
    </Layout>
  );
}

export default App;
