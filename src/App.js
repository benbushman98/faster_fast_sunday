import { useEffect, useState } from "react";
import CheckModal from "./components/checkModal";
import RedXIcon from "./components/RedXIcon";

const bingo = [
  {
    cliche: "I didn't want to come up here.",
    description:
      "Speakers often start by expressing reluctance but say they felt spiritually prompted.",
  },
  {
    cliche: "I know this church is true.",
    description:
      "A declaration affirming the belief in the truthfulness of the church.",
  },
  {
    cliche: "I'd like to bear my testimony.",
    description:
      "Standard phrase used to begin sharing one's personal testimony.",
  },
  {
    cliche: "I love my family.",
    description: "Expression of love and appreciation for family members.",
  },
  {
    cliche: "The power of prayer.",
    description:
      "Testimony on how prayer has positively impacted the speaker's life.",
  },
  {
    cliche: "The scriptures have helped me.",
    description:
      "Testimony about how reading scriptures has provided guidance and comfort.",
  },
  {
    cliche: "I'm grateful for the atonement.",
    description:
      "Expression of gratitude for the atonement and its significance.",
  },
  {
    cliche: "I was struggling, but then I felt peace.",
    description:
      "Sharing an experience of overcoming a challenge through spiritual means.",
  },
  {
    cliche: "I know the prophet is called of God.",
    description: "Belief in the divine calling of the current prophet.",
  },
  {
    cliche: "I have a testimony of the temple.",
    description: "Belief in the importance and sanctity of temple worship.",
  },
  {
    cliche: "I love my ward family.",
    description:
      "Appreciation for the support and fellowship of the local congregation.",
  },
  {
    cliche: "Heavenly Father loves us.",
    description: "Belief in God's love for all people.",
  },
  {
    cliche: "I felt prompted to share.",
    description:
      "Speakers often mention a spiritual prompting to share their testimony.",
  },
  {
    cliche: "Thank the bishopric.",
    description: "Gratitude expressed for the local church leaders.",
  },
  {
    cliche: "I'm grateful for missionaries.",
    description: "Appreciation for the efforts and dedication of missionaries.",
  },
  {
    cliche: "I know the Book of Mormon is true.",
    description:
      "Affirmation of belief in the truthfulness of the Book of Mormon.",
  },
  {
    cliche: "I felt the Spirit strongly.",
    description: "Describing a powerful spiritual experience.",
  },
  {
    cliche: "Inspired by a talk.",
    description:
      "Reference to a recent talk or sermon that inspired the speaker.",
  },
  {
    cliche: "Thankful for the priesthood.",
    description: "Gratitude for the priesthood and its blessings.",
  },
  {
    cliche: "Testimony of tithing.",
    description: "Belief in the principle of tithing and its blessings.",
  },
  {
    cliche: "Grateful for my calling.",
    description:
      "Appreciation for the opportunity to serve in a church calling.",
  },
  {
    cliche: "I know the Savior lives.",
    description: "Testimony of belief in the living Christ.",
  },
  {
    cliche: "Strong testimony of fasting.",
    description: "Belief in the power and blessings of fasting.",
  },
  {
    cliche: "Bear my witness.",
    description: "Phrase used to share a testimony or personal witness.",
  },
  {
    cliche: "Grateful for the Plan of Salvation.",
    description: "Appreciation for the teachings of the Plan of Salvation.",
  },
  {
    cliche: "Experience strengthened my faith.",
    description: "Sharing a personal experience that increased their faith.",
  },
  {
    cliche: "Families can be together forever.",
    description: "Belief in the doctrine of eternal families.",
  },
  {
    cliche: "Love the youth in this ward.",
    description: "Appreciation for the youth and their contributions.",
  },
  {
    cliche: "Felt the need to express gratitude.",
    description: "Mentioning a spiritual prompting to express thanks.",
  },
  {
    cliche: "Grateful to serve.",
    description: "Appreciation for the chance to serve in the church.",
  },
  {
    cliche: "Had a prayer answered.",
    description: "Sharing an experience of a prayer being answered.",
  },
  {
    cliche: "Thank my parents.",
    description: "Gratitude towards parents for their support and guidance.",
  },
  {
    cliche: "God hears our prayers.",
    description: "Belief that God listens to and answers prayers.",
  },
  {
    cliche: "Comforted by the Holy Ghost.",
    description:
      "Describing feeling comforted by the Holy Spirit during a difficult time.",
  },
  {
    cliche: "Testimony of the gospel.",
    description: "Affirmation of belief in the teachings of the church.",
  },
  {
    cliche: "Grateful to share my testimony.",
    description:
      "Appreciation for the chance to share one's beliefs and experiences.",
  },
];

function App() {
  const [bingos, setBingos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCliche, setSelectedCliche] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    getRandomBingos();
  }, []);

  function getRandomBingos() {
    const shuffledBingos = [...bingo].sort(() => 0.5 - Math.random());
    const selectedBingos = shuffledBingos.slice(0, 25);
    setBingos(selectedBingos);
  }

  function openModal(cliche, index) {
    setSelectedCliche(cliche);
    setSelectedIndex(index);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setSelectedCliche(null);
  }

  function isBingoMarked(index) {
    return localStorage.getItem(`done${index}`) === String(index);
  }

  if (bingos.length === 0) {
    return null;
  }

  return (
    <>
      <div className="text-center py-5 px-1 h-screen">
        <h1 className="text-2xl font-bold font-montserrat uppercase mb-10 h-1/12 text-[#1b5ea5]">
          Faster Fast Sunday
        </h1>
        <div className="grid grid-cols-5 border-2 border-[#1b5ea5] max-w-3xl m-auto mt-10 h-4/6">
          <div className="w-full h-full">
            {isBingoMarked(0) && (
              <div className="relative"
              onClick={() => openModal(bingos[0], 0)}>
                <RedXIcon />
              </div>
            )}
            <div
              className="border-2 border-[#1b5ea5] h-1/5 text-xs font-bold p-1 overflow-hidden cursor-pointer"
              onClick={() => openModal(bingos[0], 0)}
            >
              {bingos[0].cliche}
            </div>
            {isBingoMarked(1) && (
              <div className="relative"
              onClick={() => openModal(bingos[1], 1)}>
                <RedXIcon />
              </div>
            )}
            <div
              className="border-2 border-[#1b5ea5] h-1/5 text-xs font-bold p-1 overflow-hidden cursor-pointer"
              onClick={() => openModal(bingos[1], 1)}
            >
              {bingos[1].cliche}
            </div>
            {isBingoMarked(2) && (
              <div className="relative"
              onClick={() => openModal(bingos[2], 2)}>
                <RedXIcon />
              </div>
            )}
            <div
              className="border-2 border-[#1b5ea5] h-1/5 text-xs font-bold p-1 overflow-hidden cursor-pointer"
              onClick={() => openModal(bingos[2], 2)}
            >
              {bingos[2].cliche}
            </div>
            {isBingoMarked(3) && (
              <div className="relative"
              onClick={() => openModal(bingos[3], 3)}>
                <RedXIcon />
              </div>
            )}
            <div
              className="border-2 border-[#1b5ea5] h-1/5 text-xs font-bold p-1 overflow-hidden cursor-pointer"
              onClick={() => openModal(bingos[3], 3)}
            >
              {bingos[3].cliche}
            </div>
            {isBingoMarked(4) && (
              <div className="relative"
              onClick={() => openModal(bingos[4], 4)}>
                <RedXIcon />
              </div>
            )}
            <div
              className="border-2 border-[#1b5ea5] h-1/5 text-xs font-bold p-1 overflow-hidden cursor-pointer"
              onClick={() => openModal(bingos[4], 4)}
            >
              {bingos[4].cliche}
            </div>
          </div>
          <div className="w-full h-full">
            {isBingoMarked(5) && (
              <div className="relative"
              onClick={() => openModal(bingos[5], 5)}>
                <RedXIcon />
              </div>
            )}
            <div
              className="border-2 border-[#1b5ea5] h-1/5 text-xs font-bold p-1 overflow-hidden cursor-pointer"
              onClick={() => openModal(bingos[5], 5)}
            >
              {bingos[5].cliche}
            </div>
            {isBingoMarked(6) && (
              <div className="relative"
              onClick={() => openModal(bingos[6], 6)}>
                <RedXIcon />
              </div>
            )}
            <div
              className="border-2 border-[#1b5ea5] h-1/5 text-xs font-bold p-1 overflow-hidden cursor-pointer"
              onClick={() => openModal(bingos[6], 6)}
            >
              {bingos[6].cliche}
            </div>
            {isBingoMarked(7) && (
              <div className="relative"
              onClick={() => openModal(bingos[7], 7)}>
                <RedXIcon />
              </div>
            )}
            <div
              className="border-2 border-[#1b5ea5] h-1/5 text-xs font-bold p-1 overflow-hidden cursor-pointer"
              onClick={() => openModal(bingos[7], 7)}
            >
              {bingos[7].cliche}
            </div>
            {isBingoMarked(8) && (
              <div className="relative"
              onClick={() => openModal(bingos[8], 8)} 
              >
                <RedXIcon />
              </div>
            )}
            <div
              className="border-2 border-[#1b5ea5] h-1/5 text-xs font-bold p-1 overflow-hidden cursor-pointer"
              onClick={() => openModal(bingos[8], 8)}
            >
              {bingos[8].cliche}
            </div>
            {isBingoMarked(9) && (
              <div className="relative"
              onClick={() => openModal(bingos[9], 9)}>
                <RedXIcon />
              </div>
            )}
            <div
              className="border-2 border-[#1b5ea5] h-1/5 text-xs font-bold p-1 overflow-hidden cursor-pointer"
              onClick={() => openModal(bingos[9], 9)}
            >
              {bingos[9].cliche}
            </div>
          </div>
          <div className="w-full h-full">
            {isBingoMarked(10) && (
              <div className="relative"
              onClick={() => openModal(bingos[10], 10)}>
                <RedXIcon />
              </div>
            )}
            <div
              className="border-2 border-[#1b5ea5] h-1/5 text-xs font-bold p-1 overflow-hidden cursor-pointer"
              onClick={() => openModal(bingos[10], 10)}
            >
              {bingos[10].cliche}
            </div>
            {isBingoMarked(11) && (
              <div className="relative"
              onClick={() => openModal(bingos[11], 11)}>
                <RedXIcon />
              </div>
            )}
            <div
              className="border-2 border-[#1b5ea5] h-1/5 text-xs font-bold p-1 overflow-hidden cursor-pointer"
              onClick={() => openModal(bingos[11], 11)}
            >
              {bingos[11].cliche}
            </div>
            {isBingoMarked(12) && (
              <div className="relative"
              onClick={() => openModal(bingos[12], 12)}>
                <RedXIcon />
              </div>
            )}
            <div
              className="border-2 border-[#1b5ea5] h-1/5 text-xs font-bold p-1 overflow-hidden cursor-pointer"
              onClick={() => openModal(bingos[12], 12)}
            >
              {bingos[12].cliche}
            </div>
            {isBingoMarked(13) && (
              <div className="relative"
              onClick={() => openModal(bingos[13], 13)}>
                <RedXIcon />
              </div>
            )}
            <div
              className="border-2 border-[#1b5ea5] h-1/5 text-xs font-bold p-1 overflow-hidden cursor-pointer"
              onClick={() => openModal(bingos[13], 13)}
            >
              {bingos[13].cliche}
            </div>
            {isBingoMarked(14) && (
              <div className="relative"
              onClick={() => openModal(bingos[14], 14)}>
                <RedXIcon />
              </div>
            )}
            <div
              className="border-2 border-[#1b5ea5] h-1/5 text-xs font-bold p-1 overflow-hidden cursor-pointer"
              onClick={() => openModal(bingos[14], 14)}
            >
              {bingos[14].cliche}
            </div>
          </div>
          <div className="w-full h-full">
            {isBingoMarked(15) && (
              <div className="relative"
              onClick={() => openModal(bingos[15], 15)}>
                <RedXIcon />
              </div>
            )}
            <div
              className="border-2 border-[#1b5ea5] h-1/5 text-xs font-bold p-1 overflow-hidden cursor-pointer"
              onClick={() => openModal(bingos[15], 15)}
            >
              {bingos[15].cliche}
            </div>
            {isBingoMarked(16) && (
              <div className="relative"
              onClick={() => openModal(bingos[16], 16)}>
                <RedXIcon />
              </div>
            )}
            <div
              className="border-2 border-[#1b5ea5] h-1/5 text-xs font-bold p-1 overflow-hidden cursor-pointer"
              onClick={() => openModal(bingos[16], 16)}
            >
              {bingos[16].cliche}
            </div>
            {isBingoMarked(17) && (
              <div className="relative"
              onClick={() => openModal(bingos[17], 17)}>
                <RedXIcon />
              </div>
            )}
            <div
              className="border-2 border-[#1b5ea5] h-1/5 text-xs font-bold p-1 overflow-hidden cursor-pointer"
              onClick={() => openModal(bingos[17], 17)}
            >
              {bingos[17].cliche}
            </div>
            {isBingoMarked(18) && (
              <div className="relative"
              onClick={() => openModal(bingos[18], 18)}>
                <RedXIcon />
              </div>
            )}
            <div
              className="border-2 border-[#1b5ea5] h-1/5 text-xs font-bold p-1 overflow-hidden cursor-pointer"
              onClick={() => openModal(bingos[18], 18)}
            >
              {bingos[18].cliche}
            </div>
            {isBingoMarked(19) && (
              <div className="relative"
              onClick={() => openModal(bingos[19], 19)}>
                <RedXIcon />
              </div>
            )}
            <div
              className="border-2 border-[#1b5ea5] h-1/5 text-xs font-bold p-1 overflow-hidden cursor-pointer"
              onClick={() => openModal(bingos[19], 19)}
            >
              {bingos[19].cliche}
            </div>
          </div>
          <div className="w-full h-full">
            {isBingoMarked(20) && (
              <div className="relative"
              onClick={() => openModal(bingos[20], 20)}>
                <RedXIcon />
              </div>
            )}
            <div
              className="border-2 border-[#1b5ea5] h-1/5 text-xs font-bold p-1 overflow-hidden cursor-pointer"
              onClick={() => openModal(bingos[20], 20)}
            >
              {bingos[20].cliche}
            </div>
            {isBingoMarked(21) && (
              <div className="relative"
              onClick={() => openModal(bingos[21], 21)}>
                <RedXIcon />
              </div>
            )}
            <div
              className="border-2 border-[#1b5ea5] h-1/5 text-xs font-bold p-1 overflow-hidden cursor-pointer"
              onClick={() => openModal(bingos[21], 21)}
            >
              {bingos[21].cliche}
            </div>
            {isBingoMarked(22) && (
              <div className="relative"
              onClick={() => openModal(bingos[22], 22)}>
                <RedXIcon />
              </div>
            )}
            <div
              className="border-2 border-[#1b5ea5] h-1/5 text-xs font-bold p-1 overflow-hidden cursor-pointer"
              onClick={() => openModal(bingos[22], 22)}
            >
              {bingos[22].cliche}
            </div>
            {isBingoMarked(23) && (
              <div className="relative"
              onClick={() => openModal(bingos[23], 23)}>
                <RedXIcon />
              </div>
            )}
            <div
              className="border-2 border-[#1b5ea5] h-1/5 text-xs font-bold p-1 overflow-hidden cursor-pointer"
              onClick={() => openModal(bingos[23], 23)}
            >
              {bingos[23].cliche}
            </div>
            {isBingoMarked(24) && (
              <div className="relative"
              onClick={() => openModal(bingos[24], 24)}>
                <RedXIcon />
              </div>
            )}
            <div
              className="border-2 border-[#1b5ea5] h-1/5 text-xs font-bold p-1 overflow-hidden cursor-pointer"
              onClick={() => openModal(bingos[24], 24)}
            >
              {bingos[24].cliche}
            </div>
          </div>
        </div>
      </div>
      <CheckModal isOpen={modalOpen} closeModal={closeModal} cliche={selectedCliche} index={selectedIndex} />
    </>
  );
}

export default App;