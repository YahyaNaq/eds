import { Image } from "../atoms/Image"
import { Text } from "../atoms/Text"
import { ServiceTexts } from "../particles/DataLists"
import GroupOfPlus from "../../assets/plusGroup.png"
import { Card } from "../molecules/Card"
import { useCallback } from "react"
import Pouch from "../../assets/pencil-case.png"
import Tote from "../../assets/tote-bag.png"
import Apron from "../../assets/apron.png"
import StopWatch from "../../assets/stopwatch.png"
import { Fade } from "react-awesome-reveal"




const Services = () => {

    const renderServiceIcon = useCallback((element: number) => {
        switch (element) {
            case 0:
                return Pouch;
            case 1:
                return Tote;
            case 2:
                return Apron;
            default:
                return "";
        }
    }, []);
    return (
        <section className="w-full h-auto flex flex-col items-center justify-center relative lg:px-24 md:px-20 px-6">
            <Image image={GroupOfPlus} alt="Vector" className="absolute top-0 right-4 lg:h-36 h-24" />
            <main className="w-full pt-32 flex flex-col gap-3 items-center justify-center">
                <Text as="p" className="font-light text-base text-color3/80 tracking-widest">
                    <Fade>{ServiceTexts.firstText}</Fade>
                </Text>
                <Text as="h2" className="md:text-4xl text-2xl font-medium capitalize text-color3">
                    <Fade>{ServiceTexts.secondText}</Fade>
                </Text>

                <div className="w-full h-auto grid lg:grid-cols-4 md:grid-cols-2 lg:gap-7 md:gap-10 gap-7 my-12 z-20 px-8 md:px-0">
                    {
                        ServiceTexts.cards.map((card, index) => (

                            <Card cardClass="w-full bg-white flex flex-col items-center justify-center py-6 cursor-pointer transition duration-300 hover:shadow-xl px-5 rounded-xl cardPseudo after:bg-sky-600" imageWrapperClass="w-28 h-28 relative z-10 mb-4" cover="object-cover" imageAlt={card.firstText} imageSrc={renderServiceIcon(index)} textWrapperClass="w-full flex flex-col items-center gap-2" key={index} >
                                <Text as="h4" className="text-base rounded font-medium text-color3">
                                    {card.firstText}
                                </Text>
                                <Text as="p" className="text-sm  font-light text-center text-color3">
                                    {card.secondText}
                                </Text>
                            </Card>
                        ))
                    }
                        <Card cardClass="border-sky-200 border-2 w-full bg-sky-50 flex flex-col items-center justify-center py-6 cursor-pointer transition duration-300 hover:shadow-xl px-5 rounded-xl cardPseudo after:bg-sky-600" imageWrapperClass="h-20 w-auto" imageAlt="Stop watch" imageSrc={StopWatch}>
                            <Text as="h4" className="text-xl mt-4 font-semibold rounded text-color3">
                                COMING SOON
                            </Text>
                        </Card>
                </div>
            </main>

        </section>
    )
}

export default Services