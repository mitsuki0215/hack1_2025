// データ - 本物の記事とフェイクニュースのリスト
const items = [
  { 
    id: 1, 
    title: "新型の電気自動車、充電時間わずか5分を実現",
    content: "大手自動車メーカーが革新的なバッテリー技術を採用した新型電気自動車を発表。従来の充電時間を大幅に短縮し、わずか5分でのフル充電を実現。この技術は特殊な結晶構造を持つ新素材を使用している.", 
    type: "fake",
    explanation: "現在の技術では、5分での電気自動車のフル充電は物理的に困難です。最新の急速充電技術でも、80%充電までに20-30分程度必要とされています。"
  },
  { 
    id: 2, 
    title: "国内初、空飛ぶタクシーの実証実験を開始",
    content: "国土交通省は、都市部での新たな移動手段として期待される空飛ぶタクシーの実証実験を開始。2025年の大阪・関西万博での実用化を目指し、安全性や騒音対策などの検証を行う.", 
    type: "real",
    explanation: "これは実際の政策に基づいたニュースであり、日本政府は2025年の万博を目標に空飛ぶモビリティの実用化に向けた取り組みを進めています。"
  },
  { 
    id: 3, 
    title: "AI搭載の植物が環境変化を人間に通知",
    content: "研究チームが開発した新技術により、植物にAIセンサーを組み込み、水不足や病気の兆候を早期に検知し、スマートフォンに通知することが可能に。一般家庭での導入は来年から開始予定.", 
    type: "fake",
    explanation: "植物の状態を監視するセンサーは存在しますが、植物自体にAIを組み込む技術は現在開発されていません。また、一般家庭向けの製品化の予定もありません。"
  },
  { 
    id: 4, 
    title: "世界最小の手術ロボット、臨床試験で成功",
    content: "医療機器メーカーが開発した直径1ミリメートルの手術用マイクロロボットが、初の臨床試験で成功。血管内を自律的に移動し、患部の治療が可能。来年から特定の治療での使用開始を予定.", 
    type: "real",
    explanation: "これは信頼性の高い研究成果に基づく報道であり、実際に複数の医療機関でマイクロロボットの臨床応用が進められています。"
  },
  { 
    id: 5, 
    title: "新技術で夢の内容をデジタル記録化に成功",
    content: "脳科学研究所が、睡眠中の夢をデジタルデータとして記録する技術の開発に成功。被験者の脳波を分析し、見ている夢の映像を約80%の精度で再現できるという.", 
    type: "fake",
    explanation: "夢の内容を映像として記録・再現する技術は現在存在しません。脳活動のパターンを検出することは可能ですが、具体的な夢の映像を再現するレベルには達していません。"
  },
  { 
    id: 6, 
    title: "海洋プラスチックから作る環境配慮型の建材が実用化",
    content: "環境技術ベンチャーが、海洋プラスチックごみを再利用した高強度建材の製造技術を確立。従来のコンクリートと同等の強度を持ち、製造時のCO2排出量を60%削減できる.", 
    type: "real",
    explanation: "これは実際の技術開発に基づくニュースです。海洋プラスチックを活用した建材開発は、世界中の企業や研究機関で進められています。"
  }
];
