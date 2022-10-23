import { useRouter } from "next/router";

function Qanda() {
  const router = useRouter();
  return (
    <>
      <h1>Q & A</h1>
      <a onClick={() => router.back()}>戻る</a>
      <h3>Q. 編集した状態を保存したいですが...</h3>
      <p>
        A.
        編集した後のURLをキープしていれば、そのURLで開くと前回編集した状態が継続されます。
        <br />
        <br />
        リンクをキープするのが面倒くさい場合は、<strong>ブラウザに保存</strong>
        ボタンをクリックすると、ブラウザのlocalStorageというところに保存できて、
        <strong>ブラウザから読み取る</strong>
        ボタンでそのデータを読み取ることができますが、キャッシュクリアなどでデータが失くなる可能性がありますのでご注意ください。もちろん、違うブラウザではそのブラウザに保存したデータが読み取れません。シークレットモードも<strong>ブラウザに保存</strong>機能が使えません。
        <br />
        <br />
        なので、編集状態を保存したい方は、編集後のURLをどこかにキープすることを強く推奨します。
      </p>
      <h3>Q. ソースコードを見たいです！</h3>
      <p>
        A.
        <a href="https://github.com/ssdh233/ssdh233-tools/tree/main/pages/popn-card">
          https://github.com/ssdh233/ssdh233-tools/tree/main/pages/popn-card
        </a>
      </p>
      <h3>Q. あんな機能やこんな機能を追加してほしいですが...</h3>
      <p>
        A.
        <a href="https://github.com/ssdh233/ssdh233-tools/issues">
          Githubのissues
        </a>
        か、<a href="https://twitter.com/ssdh233">Twitter</a>
        などでお気軽に相談してください。
      </p>
    </>
  );
}

export default Qanda;
