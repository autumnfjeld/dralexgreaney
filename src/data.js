
var about = {

    summary: [
        'Using a combination of theory and simulation, we aim to understand and address fundamental problems in materials science.  We apply the understanding we gain towards designing materials that impact the way we live—smart materials for chemical sensing, nanostructured materials, and materials for energy efficiency.',

        'We believe that computationally based investigation is a true “third pillar” of science, and that when performed well can lead to new insights that are less easily attained by either theory and experiment alone. With the ever decreasing cost of computing power and rapid advances in algorithm development, the role of computation in scientific investigation is becoming evermore prominent.',

        'Currently our research interests are focused on thermal and mechanical properties of nanostructured materials and devices. This includes finding new ways of controlling heat, and new ways of adding value to heat. It involves inventing new nanoscale devices and computationally assessing them.'
    ]

};

var researchProjects = [
    {
        title : "Engineering thermal properties in MOFs",
        imageUrl: "http://research.engr.oregonstate.edu/greaney/sites/research.engr.oregonstate.edu.greaney/files/images/irmof-3-struct.thumbnail.png",
        imageTitle: "",
        text: [
            "Metal-organic-frameworks (MOFs) are astounding new materials with open molecular-trellis structures. Because these materials are structurally so different from traditional  monolithic crystalline solids, they abound with opportunities for engineering thermal properties. By discovering the mechanisms of heat transport in these materials we aim to create new materials with exciting new thermal properties.",
            "Metal-organic-frameworks materials (MOFs) are an exciting new class of materials which are composed of a geometric molecular space-frame of organic linker molecules connecting metallic nodal units. These materials are open and intrinsically porous (the most porous materials known to man), however they also grow spontaneously in solution without the need of complex top-down assembly. There is a vast wealth of MOF crystal structures-a MOF's crystal symmetry is dictated by the metallic nodal units, and the topology by the geometry of the organic linker arms.",

            "The open space-frame structure of MOFs endows them with some remarkable properties-for example, they can be designed to play host to combinations of functional components within the interstices of the framework, which can be used to create materials with exotic optical properties.  There are two other properties of MOFs that are important for our research.",

            "1) MOFs can be used to absorb huge quantities of gas. This makes MOFs promising for important applications such as hydrogen storage and carbon sequestration. It also makes MOFs useful for less glamorous applications in which surface area is important, such as absorption refrigeration.",

            "2) The open structure of MOFs means that many of the low frequency vibrational modes are not traveling waves, as they would be in a conventional fully dense solid. Instead many modes are localized to individual framework linkages, and as such these modes cannot carry heat.",

            "In our research we are interested in the interplay of these two effects. In particular we are studying how gases within a MOF interact with localized modes and how this can be used to change the thermal conductivity. By understanding the fundamental processes of thermal transport in MOFs we aim to design exciting new materials with externally tunable, and/or thermally responsive properties.",

            "To understand the mechanisms of heat transport in these materials we use a combination of first principles and empirical methods to simulate thermal transport in the material, and its interaction with intercalated gas molecules."
        ]
    },
    {
        title : "Simulation of gecko-inspired dry adhesion system",
        imageUrl: "http://research.engr.oregonstate.edu/greaney/sites/research.engr.oregonstate.edu.greaney/files/images/gecko_foot_on_glass-sm.preview.png",
        imageTitle: "Gecko foot on glass",
        text: [
            "Geckos' amazing ability to walk upside down on the ceilings is due to the van der Waals attraction between the walls and millions of hairs on a gecko's foot. What is more remarkable, is that this dry adhesive is switchable -- geckos don't stick to walls like fly on fly-paper but can easily unstick their feet as they walk or run. In our research we are applying methods used to study earthquakes to discover the role of two factors in the gecko's adhesion system: the geometry of the hairs, and the hair to toe hierarchy."
        ]
    },
    {
        title : "Dissipation in nanoscale resonators",
        imageUrl: "http://research.engr.oregonstate.edu/greaney/sites/research.engr.oregonstate.edu.greaney/files/images/long-cnt-pulse-crp.thumbnail.png",
        imageTitle: "Wave packet in Carbon Nano Tubes",
        text: [
            "Carbon nanotubes dissipate vibrations in surprising and unusual ways. The larger the excitation in a nanotube, the quicker it dissipates. We are keen to discover the cause of this strange dissipation and to find ways to make use to it.",
            "Carbon nanotubes (CNTs) are long and slender, lightweight, and incredibly stiff. This would make them ideal for nanoscale mechanical resonators (like tiny guitar strings) that resonate with exceedingly high frequency. Resonators such as this have many current and potential applications ranging from being able to weigh single atoms, to being used as emitters, receivers, and waveguides for wireless communication. "
        ]
    },


];

module.exports.app = {
    about: about,
    researchProjects: researchProjects
};