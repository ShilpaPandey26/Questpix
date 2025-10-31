import React from "react";

export default function SelectChapterFlash({ selectedTopic }) {
    // console.log("chapter", selectedTopic);
    const subjectChapter = {
        // -------- CHEMISTRY --------
        organicchemistry: [
            "NOMENCLATURE OF ORGANIC COMPOUNDS",
            "GENERAL ORGANIC CHEMISTRY",
            "STRUCTURAL ISOMERISM",
            "HYDROCARBON",
            "HALOALKANE AND HALOARENES",
            "ALDEHYDE AND KETONE",
            "CARBOXYLIC ACID AND AMINES",
            "AROMATIC COMPOUNDS",
            "BIOMOLECULES",
            "POLYMER",
            "CHEMISTRY IN EVERY DAY LIFE",
            "ENVIRONMENTAL CHEMISTRY",
            "PRACTICAL ORGANIC CHEMISTRY",
            "ALCOHOL AND ETHER",
            "STEREOISOMERISM",
            "NAME REACTION",
        ],

        inorganicchemistry: [
            "PERIODIC TABLE & PERIODICITY",
            "CHEMICAL BONDING (11th)",
            "CHEMICAL BONDING (12th)",
            "S-BLOCK ELEMENTS",
            "HYDROGEN",
            "P-BLOCK ELEMENTS (B & C FAMILY)",
            "COORDINATION COMPOUNDS",
            "METALLURGY",
            "QUALITATIVE ANALYSIS",
            "P-BLOCK ELEMENTS (N & O FAMILY)",
            "P-BLOCK ELEMENTS (HALOGEN & NOBLE GASES)",
            "D & F-BLOCK ELEMENTS & THEIR IMPORTANT COMPOUNDS",
            "SALT ANALYSIS",
            "GENERAL CHEMISTRY",
        ],

        physicalchemistry: [
            "SOLID STATE",
            "REDOX EQUIVALENT CONCEPT & TITRATION",
            "ELECTROCHEMISTRY",
            "CHEMICAL KINETICS",
            "LIQUID SOLUTION & COLLIGATIVE PROPERTIES",
            "MOLE CONCEPT",
            "GASEOUS STATE",
            "CHEMICAL EQUILIBRIUM",
            "ATOMIC STRUCTURE & NUCLEAR CHEMISTRY",
            "IONIC EQUILIBRIUM (11th)",
            "IONIC EQUILIBRIUM (12th)",
            "SURFACE CHEMISTRY",
            "THERMODYNAMICS & THERMOCHEMISTRY",
        ],

        // -------- PHYSICS --------
        unitdimensioncalculusbasicmathsvectors: [
            "UNIT & DIMENSION",
            "CALCULUS AND BASIC MATHS",
            "VECTORS",
        ],
        mechanics: [
            "Kinematics 1-D",
            "NLM",
            "CIRCULAR MOTION",
            "WORK ENERGY AND POWER",
            "CENTER OF MASS",
            "ROTATION",
            "Kinematics 2-D",
        ],
        gravitation: ["GRAVITATION"],
        shmandwaves: ["SHM", "WAVE ON STRING", "SOUND WAVE"],
        propertiesofsolidsandfluids: ["Elasticity", "FLUID"],
        thermalphysics: ["HEAT & THERMO", "Kinetic Theory of Gases"],
        electromagnetism: [
            "ELECROSTATICS",
            "CURRENT ELECTRICITY",
            "CAPACITOR",
            "MAGNETISM",
            "EMI/AC",
            "EM WAVES",
            "Alternating Current",
        ],
        errorandpracticalphysics: ["ERROR", "PRACTICAL PHYSICS"],
        modernphysics: ["MODERN PHYSICS"],
        semiconductors: ["SEMICONDUCTORS"],
        optics: ["GEOMETRICAL OPTICS", "WAVE OPTICS"],

        // -------- MATHEMATICS --------
        algebra: [
            "QUADRATIC EQUATION",
            "COMPLEX NUMBER",
            "SEQUENCE AND SERIES",
            "PERMUTATION & COMBINATION",
            "PROBABILITY",
            "MATRICES",
            "BINOMIAL THEOREM",
            "3D",
            "DETERMINANT",
            "VECTORS",
            "FUNDAMENTAL OF MATHEMATICS",
            "STATISTICS",
            "LOGARITHM",
        ],
        calculus: [
            "FUNCTION",
            "INVERSE TRIGONOMETRIC FUNCTION",
            "LIMIT",
            "CONTINUITY",
            "DIFFERENTIABILITY",
            "METHOD OF DIFFERENTIATION",
            "TANGENT AND NORMAL",
            "MONOTONICITY",
            "MAXIMA AND MINIMA",
            "INDEFINITE INTEGRATION",
            "DEFINITE INTEGRATION",
            "DIFFERENTIAL EQUATION",
            "AREA UNDER THE CURVE",
            "SET and RELATION",
        ],
        coordinategeometry: [
            "STRAIGHT LINE",
            "CIRCLE",
            "PARABOLA",
            "ELLIPSE",
            "HYPERBOLA",
        ],
        trigonometry: [
            "COMPOUND ANGLE",
            "TRIGONOMETRICAL EQUATION",
            "PROPERTIES AND SOLUTION OF TRIANGLES",
        ],
    };

    const key = selectedTopic?.toLowerCase().replace(/[^a-z0-9]/g, "");
    const Chapters = subjectChapter[key] || [];


    return (
       <div className="flex flex-col items-center md:items-start px-2 pt-24 sm:pt-16 md:pt-0">
      <h3 className="text-3xl lg:text-2xl mt-5 mb-10 font-bold ">Select Chapter</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 mb-8 mr-14">
                {Chapters.map((Chapter, index) => (
                    <div
                        key={index}
                        className="border border-dashed border-[rgb(72,201,241)] p-3 rounded-lg text-center text-[#ffffffb0] font-medium cursor-pointer 
          hover:border-solid hover:border-[rgb(89,221,184)] hover:text-white transition-all duration-300 w-[230px] "
                    >
                        {Chapter}
                    </div>
                ))}
            </div>
        </div>
    );
}
