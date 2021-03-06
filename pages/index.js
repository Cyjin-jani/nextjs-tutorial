import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import ItemList from '../src/component/ItemList';
import { Divider, Header, Loader } from 'semantic-ui-react';

export default function Home({ list }) {
  //상품 리스트 관리용 state
  // const [list, setList] = useState([]); //정적 생성시 무쓸모
  // 페이지 로딩 시 로딩 인디케이터 용 state
  // const [isLoading, setIsLoading] = useState(true);  //정적 생성시 무쓸모 

  //화장품 데이터 api 
  // const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  //browser환경이므로 환경변수를 이렇게 사용함.
  // const API_URL = process.env.NEXT_PUBLIC_API_URL; //정적 생성시 무쓸모
  
  /*아래는 정적 생성시에 필요 없음.
  //api 데이터 불러오기 함수
  // function getData() {
  //   axios.get(API_URL)
  //   .then(res => {
  //     console.log(res.data);
  //     setList(res.data);
  //     // api호출이 완료되면 로딩을 false로.
  //     setIsLoading(false);
  //   })
  // }

  // useEffect(() => {
  //   getData();

  // }, []);
  */

  return (
    <div>
      <Head>
        <title>HOME | nextjs튜토리얼</title>
        <meta name="description" content="여기가 홈입니다."></meta>
      </Head>
      {/* 정적 생성시 무쓸모
      {isLoading && (
        <div style={{ padding: '300px 0'}}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )} 
      {!isLoading && (
        <>
          <Header as="h3" style={{ paddingTop: 40 }}>베스트 상품</Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />
          <Header as="h3" style={{ paddingTop: 40 }}>신상품</Header>
          <Divider />
          <ItemList list={list.slice(9)} />
        </>
      )}
      */}
      <>
        <Header as="h3" style={{ paddingTop: 40 }}>베스트 상품</Header>
        <Divider />
        <ItemList list={list.slice(0, 9)} />
        <Header as="h3" style={{ paddingTop: 40 }}>신상품</Header>
        <Divider />
        <ItemList list={list.slice(9)} />
      </>
    </div>
  )
}

//정적 생성하기
// 정적 생성하면 빌드 시에 static한 html파일로 만들어져버림...
export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name
    }
  }
}



// create-next-app으로 설치하면 다음과 같은 장점이 있다.
// 1. 컴파일과 번들링이 자동으로 된다. (webpack, babel 등)
// 2. 자동 리프레쉬 기능으로 수정하면 화면에 바로 반영이 된다.
// 3. 서버사이드 렌더링이 지원 된다.
// 4. 스태틱 파일을 지원한다. (public 폴더 하위에 만들면 됨)
