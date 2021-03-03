const menuAnimal = () => {
    let sel1 = prompt(
        "Seleccione el numero indicado para mas información sobre la categoria de animales a consultar: \n 1 - Vertebrados \n 2 - Invertebrados \n 3 - Herbívoros \n 4 - Carnívoros"
    );
    if (sel1 === "1" || sel1 === "2" || sel1 === "3" || sel1 === "4") {

        if (sel1 === "1") {
            let sel2 = prompt(
                "Usted ha seleccionado Vertebrados, a continuación encontrará los animales que puede consultar: \n 1 - Osos  \n 2 - Loros \n 3 - Tiburones \n 4 - Cocodrilos \n 5 - Ranas"
            );
            if (sel2 !== "1" && sel2 !== "2" && sel2 !== "3" && sel2 !== "4" && sel2 !== "5") {
                alert("Opción invalida - click nuevamente para menu principal");
            } else {
                if (sel2 === "1") {
                    alert("Usted ha seleccionado Osos: \n Los osos son una familia de mamíferos omnívoros. Son animales de gran tamaño, generalmente omnívoros ya que, a pesar de su temible dentadura, comen frutos, raíces e insectos, además de carne."
                    );
                }
                if (sel2 === "2") {
                    alert("Usted ha seleccionado Loros: \n Los loros son animales bastante sociables y muy inteligentes porque poseen una gran capacidad craneal. Algunas especies de loros tienen la habilidad de imitar gran diversidad de sonidos, lo que incluye a la voz humana."
                    );
                }
                if (sel2 === "3") {
                    alert("Usted ha seleccionado Tiburones: \n Los tiburones son un superorden de condrictios (peces cartilaginosos) conocidos comúnmente con el nombre de tiburones o escualos. Algunos grandes escualos, como el tiburón blanco y el toro, son conocidos a veces con el nombre de jaquetones."
                );

            }
                if (sel2 === "4") {
                    alert("Usted ha seleccionado Cocodrilos: \n Los Cocodrilos es una familia de saurópsidos, arcosaurios comúnmente conocidos como cocodrilos. Incluye a catorce especies actuales."
                );
                }
                if (sel2 === "5") {
                    alert("Usted ha seleccionado Ranas: \n Las ranas son pequeños vertebrados anfibios anuros que viven en zonas húmedas o asociadas al agua, que no tienen cola de adultos y dan grandes saltos."
                );
                }
             }
         }
         if (sel1 === "2") {
            let sel2 = prompt(
                "Usted ha seleccionado Invertebrados, a continuación encontrará los animales que puede consultar: \n 1 - Arañas \n 2 - Gusanos de tierra \n 3 - Pulpos \n 4 - Medusas \n 5 - Esponjas"
            );
            if (sel2 !== "1" && sel2 !== "2" && sel2 !== "3" && sel2 !== "4" && sel2 !== "5") {
                alert("Opción invalida - click nuevamente para menu principal");
            } else {
                if (sel2 === "1") {
                    alert("Usted ha seleccionado Arañas: \n Las arañas son animales invertebrados más representativos de la clase Arachnida (arácnidos), grupo que comparten con animales similares como los escorpiones, las garrapatas o los ácaros."
                    );
                }
                if (sel2 === "2") {
                    alert("Usted ha seleccionado Gusanos de Tierra: \n La lombriz de tierra es un animal invertebrado que pertenece al filo de los anélidos y a la subclase de los oligoquetos."
                    );
                }
                if (sel2 === "3") {
                    alert("Usted ha seleccionado Pulpos: \n Los pulpos, conocidos científicamente como octópodos, son unos animales invertebrados que se clasifican dentro en el filo de los Moluscos (Mollusca), clase Cefalópodos (Cephalopoda) y orden Octopoda."
                );

            }
                if (sel2 === "4") {
                    alert("Usted ha seleccionado Medusas: \n Las medusas son invertebrados que, junto con los corales, las gorgonias y las anémonas, pertenecen al grupo de los cnidarios. Este grupo animal presenta células urticantes que usan para capturar presas y también como defensa."
                );
                }
                if (sel2 === "5") {
                    alert("Usted ha seleccionado Esponjas: \n Las esponjas de mar, son un filo de animales acuáticos que se encuentran enclavados dentro del subreino Parazoa."
                );
                }
             }
         }

         if (sel1 === "3") {
            let sel2 = prompt(
                "Usted ha seleccionado Hervíboros, a continuación encontrará los animales que puede consultar: \n 1 - Oruga \n 2 - Koala \n 3 - Conejo \n 4 - Canguro \n 5 - Elefante"
            );
            if (sel2 !== "1" && sel2 !== "2" && sel2 !== "3" && sel2 !== "4" && sel2 !== "5") {
                alert("Opción invalida - click nuevamente para menu principal");
            } else {
                if (sel2 === "1") {
                    alert("Usted ha seleccionado Oruga: \n La oruga varía su alimentación dependiendo de su especie, aunque la mayoría de especies son herbívoras. Se alimentan principalmente de hojas, platas y flores"
                    );
                }
                if (sel2 === "2") {
                    alert("Usted ha seleccionado Koala: \n Los koalas son estrictamente herbívoros, también se alimentan de materia vegetal de algunos árboles concretos que crecen en su hábitat natural, la zona oriental del continente australiano"
                    );
                }
                if (sel2 === "3") {
                    alert("Usted ha seleccionado Conejo: \n Los conejos son herbívoros, por lo que se alimentan principalmente de vegetales"
                );

            }
                if (sel2 === "4") {
                    alert("Usted ha seleccionado Canguro: \n Los canguros poseen grandes y poderosas patas traseras, grandes pies aptos para saltar, una cola larga y musculosa para mantener el equilibrio y una cabeza pequeña. Los canguros son herbívoros, alimentándose de pasto y raíces. "
                );
                }
                if (sel2 === "5") {
                    alert("Usted ha seleccionado Elefante: \n La alimentación del elefante se basa en hierbas, raíces, hojas y cortezas de ciertos árboles y arbustos. Por tanto, los elefantes son animales herbívoros. Para mantener su enorme tamaño corporal, necesitan comer durante unas 15 horas diarias y pueden llegar a consumir hasta 150 kg de plantas cada día"
                );
                }
             }
         }
         if (sel1 === "4") {
            let sel2 = prompt(
                "Usted ha seleccionado Carnívoros, a continuación encontrará los animales que puede consultar: \n 1 - Águila \n 2 - Lobo \n 3 - Puma \n 4 - Serpiente \n 5 - Zorro"
            );
            if (sel2 !== "1" && sel2 !== "2" && sel2 !== "3" && sel2 !== "4" && sel2 !== "5") {
                alert("Opción invalida - click nuevamente para menu principal");
            } else {
                if (sel2 === "1") {
                    alert("Usted ha seleccionado Águila: \n Todas las águilas son animales depredadores y, por tanto, carnívoros. Sus presas suelen ser pequeños o medianos mamíferos, como lagomorfos, mustélidos y roedores. Además, muchas consumen otras aves más pequeñas"
                    );
                }
                if (sel2 === "2") {
                    alert("Usted ha seleccionado Lobo: \n El lobo es un mamífero carnívoro. También, se trata de uno de los animales más controvertidos por su belleza salvaje y porque muchas personas siguen considerándolos una amenaza"
                    );
                }
                if (sel2 === "3") {
                    alert("Usted ha seleccionado Puma: \n El puma, león de montaña o león americano​ es un mamífero carnívoro de la familia Felidae nativo de América. Este felino vive en más lugares que cualquier otro mamífero silvestre terrestre del continente, ya que se extiende desde el Yukón, en Canadá, hasta el sur de la cordillera de los Andes y la Patagonia en América del Sur."
                );

            }
                if (sel2 === "4") {
                    alert("Usted ha seleccionado Serpiente: \n La serpiente se caracteriza por ser un animal carnívoro que se alimenta de aves, insectos, peces, reptiles, anfibios y en algunas ocasiones hasta de animales de su propia especie. "
                );
                }
                if (sel2 === "5") {
                    alert("Usted ha seleccionado Zorro: \n El zorro es el mamífero carnívoro más abundante del planeta  y se encuentra distribuido por todo el hemisferio norte, de modo que en Eurasia habita desde la Península Ibérica y el Norte de Marruecos hasta el Japón, por el Norte tiene el límite en la zona de los hielos, donde le sustituye el zorro ártico y por el Sur."
                );
                }
             }
         }

    }
         else {
    alert("Solo se acepta opciones entre 1 y 4; intentelo nuevamente")
         }
};