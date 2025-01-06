export const datasCart = [
    {
        id: 1,
         photo: 'img/genie-civil.jpg',
        title: 'Construction Bâtiments',
        description: 'De la conception à la réalisation, nous mettons à votre disposition notre expertise pour garantir des constructions de qualité, réalisés dans le respect des délais et des normes de sécurité. '
    },
    {
        id: 2,
        photo: 'img/hydraulique.jpg',
        title: 'Travaux Routiers et Infrastructures Publiques',
        description: "Nous proposons des services spécialisés dans les travaux routiers et les infrastructures publiques, offrant des solutions complètes et sur mesure pour répondre aux besoins de nos clients."
    },
    {
        id: 3,
        photo: 'img/archi-3d.jpg',
        title: 'Architecture et Plan 3D',
        description: "Nous proposons des services d'architecture sur mesure, alliant créativité et expertise technique pour donner vie à vos projets. Nous vous accompagnons, de l'élaboration des plans à la réalisation finale."
    },
    {
        id: 4,
        title: "Terassement et Génie Civil",
        photo: 'img/charpente-metallique.jpg',
        description: "De la préparation du terrain à la réalisation des fondations, en passant par les réseaux d'assainissement, garantissant des solutions efficaces pour vos projets de construction et d'aménagement."
    },

];


export const datasCartHome = [
    {
        id: 1,
        title: 'Batiment et travaux public',
        description: "Spécialistes en construction, rénovation et aménagement, nous intervenons sur des projets résidentiels, commerciaux et industriels."
    },
    {
        id: 2,
        title: 'Génie civil',
        description: "Des solutions innovantes pour vos projets de génie civil. Nous mettons à votre service notre expertise pour concevoir, planifier et réaliser des infrastructures fiables et durables."
    },
    {
        id: 3,
        title: "Architecture et Plan 3D",
        description: "Transformez vos idées en réalité avec nos services d'architecture et de modélisation 3D. Nous vous accompagnons dans la conception de vos projets architecturaux"
    },
];

export const datasFAQ = [
    {
        id: 1,
        btnToggle () {
            const btn = document.querySelector('#btnChevron1')
            let textHidden = document.querySelector('#textHidden1')
            btn.classList.toggle('rotate-90')
            btn.classList.toggle('duration-400')
            btn.classList.toggle('text-lg')
            textHidden.classList.toggle('hidden')
            textHidden.innerHTML = `<p>Nos compétences que nous vous proposons pour répondre à vos besoins sont les suivants : </p>
                                        <dir className= "list-disc">
                                            <li><strong>Construction</strong> : construction résidentielle, construction commerciale et industrielle, ouvrage d'art.</li>
                                            <li><strong>Travaux publics</strong> : Aménagements urbains, construction de ponts, terrassement et préparation de terrains.</li>
                                            <li><strong>Génie civil </strong> : Fondations spéciales et stabilisation des sols; gestion des risques hydrauliques et environnementaux.</li>
                                            <li><strong> Sécurité et conformité </strong> : Respect des normes de sécurité sur les chantier; formation des équipes aux bonnes pratiques.</li>
                                        </dir>`

        },
        question: "Quels sont vos domaines de competences ?",
    },
    {
        id: 2,
        btnToggle () {
            const btn = document.querySelector('#btnChevron2')
            let textHidden = document.querySelector('#textHidden2')
            btn.classList.toggle('rotate-90')
            btn.classList.toggle('duration-400')
            btn.classList.toggle('text-lg')
            textHidden.classList.toggle('hidden')
            textHidden.innerHTML = `Gérer des travaux de construction demande méthode et expertise.
                                    De l'élaboration du budget à la livraison finale, il est essentiel
                                    de maîtriser les délais, les coûts et la qualité des matériaux. 
                                    En nous confiant votre projet, nous vous assurons une exécution 
                                    fluide et conforme à vos attentes.`

        },
        question: "Comment vous gérez les travaux de construction ?",
    },
    {
        id: 3,
        btnToggle () {
            const btn = document.querySelector('#btnChevron3')
            let textHidden = document.querySelector('#textHidden3')
            btn.classList.toggle('rotate-90')
            btn.classList.toggle('duration-400')
            btn.classList.toggle('text-lg')
            textHidden.classList.toggle('hidden')
            textHidden.innerHTML = `<p>Nous intervenons sur plusieurs types d’infrastructures, adaptées à vos besoins : </p>
                                        <dir className= "list-disc">
                                            <li><strong>Routes et voiries</strong> : construction, réhabilitation et entretien des chaussées.</li>
                                            <li><strong>Ponts et ouvrages d’art </strong> : conception et réalisation de structures résistantes et durables.</li>
                                            <li><strong>Bâtiments industriels et commerciaux </strong> : plateformes logistiques, entrepôts, usines, etc.</li>
                                        </dir>
                                    `

        },
        question: "Quels types d’infrastructures prenez-vous en charge ?",
    },
    {
        id: 4,
        btnToggle () {
            const btn = document.querySelector('#btnChevron4')
            let textHidden = document.querySelector('#textHidden4')
            btn.classList.toggle('rotate-90')
            btn.classList.toggle('duration-400')
            btn.classList.toggle('text-lg')
            textHidden.classList.toggle('hidden')
            textHidden.innerHTML = `<p>Pour obtenir un devis,</p>
                                    <dir className='list-disc px-10'>    
                                        <li>Vous pouvez nous contactez via notre formulaire, par téléphone ou par email</li>
                                        <li>Fournissez les détails de votre projet, comme le type de construction, la superficie, votre budget estimé, et toute autre information utile.</li>
                                        <li>Planifiez un rendez-vous si nécessaire, pour une visite sur site ou une discussion approfondie sur vos besoins.</li>

                                    </dir>`
        },
        question: "Comment puis-je obtenir un devis pour mon projet ?",
    },
]