// Legal database with comprehensive information
const legalDatabase = {
    categories: {
        "fundamental_rights": {
            name: "Fundamental Rights",
            icon: "fa-star",
            description: "Basic rights guaranteed by the Indian Constitution"
        },
        "directive_principles": {
            name: "Directive Principles",
            icon: "fa-compass",
            description: "Guidelines for state policy"
        },
        "constitutional_bodies": {
            name: "Constitutional Bodies",
            icon: "fa-building",
            description: "Important constitutional institutions"
        },
        "criminal": {
            name: "Criminal Law",
            icon: "fa-gavel",
            description: "Criminal offenses and procedures"
        },
        "civil": {
            name: "Civil Law",
            icon: "fa-handshake",
            description: "Civil rights and procedures"
        },
        "property": {
            name: "Property Rights",
            icon: "fa-home",
            description: "Property and land laws"
        },
        "family": {
            name: "Family Law",
            icon: "fa-users",
            description: "Family and personal laws"
        },
        "business": {
            name: "Business Law",
            icon: "fa-briefcase",
            description: "Corporate and commercial laws"
        },
        "womens_rights": {
            name: "Women's Rights",
            icon: "fa-female",
            description: "Laws protecting women's rights and equality"
        },
        "traffic": {
            name: "Traffic Laws",
            icon: "fa-car",
            description: "Road transport and traffic regulations"
        }
    },
    data: {
        // Fundamental Rights
        "right_to_equality": {
            title: "Right to Equality (Article 14-18)",
            article: "Articles 14-18 of Indian Constitution",
            description: "The Right to Equality ensures equal protection of laws and prohibits discrimination on grounds of religion, race, caste, sex, or place of birth.",
            solution: "Legal remedies for equality violations:\n1. File a writ petition under Article 32\n2. Approach High Court under Article 226\n3. File complaint with National Human Rights Commission\n4. Seek legal aid from State Legal Services Authority",
            category: "Fundamental Rights",
            relatedLaws: ["Article 14", "Article 15", "Article 16", "Article 17", "Article 18"],
            importantPoints: "• Equal protection of laws\n• Prohibition of discrimination\n• Equality of opportunity\n• Abolition of untouchability\n• Abolition of titles",
            detailedInfo: {
                article14: "Article 14: Equality before law and equal protection of laws",
                article15: "Article 15: Prohibition of discrimination on grounds of religion, race, caste, sex or place of birth",
                article16: "Article 16: Equality of opportunity in matters of public employment",
                article17: "Article 17: Abolition of untouchability",
                article18: "Article 18: Abolition of titles"
            }
        },
        "right_to_freedom": {
            title: "Right to Freedom (Article 19-22)",
            article: "Articles 19-22 of Indian Constitution",
            description: "The Right to Freedom guarantees various freedoms including speech, assembly, movement, residence, and profession.",
            solution: "Legal remedies for freedom violations:\n1. File habeas corpus petition\n2. Approach Supreme Court under Article 32\n3. File complaint with National Human Rights Commission\n4. Seek legal aid from State Legal Services Authority",
            category: "Fundamental Rights",
            relatedLaws: ["Article 19", "Article 20", "Article 21", "Article 22"],
            importantPoints: "• Freedom of speech and expression\n• Right to assemble peacefully\n• Right to form associations\n• Right to move freely\n• Right to practice any profession",
            detailedInfo: {
                article19: "Article 19: Protection of certain rights regarding freedom of speech, assembly, association, movement, residence, and profession",
                article20: "Article 20: Protection in respect of conviction for offences",
                article21: "Article 21: Protection of life and personal liberty",
                article22: "Article 22: Protection against arrest and detention"
            }
        },
        "right_against_exploitation": {
            title: "Right Against Exploitation (Article 23-24)",
            article: "Articles 23-24 of Indian Constitution",
            description: "Prohibits human trafficking, forced labor, and child labor.",
            solution: "Legal remedies for exploitation:\n1. File complaint with police\n2. Approach National Human Rights Commission\n3. Contact ChildLine for child labor\n4. Seek help from NGOs working against trafficking",
            category: "Fundamental Rights",
            relatedLaws: ["Article 23", "Article 24", "Bonded Labor System Act, 1976"],
            importantPoints: "• Prohibition of human trafficking\n• Prohibition of forced labor\n• Prohibition of child labor\n• Right to minimum wages\n• Right to safe working conditions"
        },
        "right_to_freedom_of_religion": {
            title: "Right to Freedom of Religion (Article 25-28)",
            article: "Articles 25-28 of Indian Constitution",
            description: "Guarantees freedom of conscience and free profession, practice, and propagation of religion.",
            solution: "Legal remedies for religious freedom violations:\n1. File complaint with police\n2. Approach High Court under Article 226\n3. Contact State Minority Commission\n4. Seek help from religious organizations",
            category: "Fundamental Rights",
            relatedLaws: ["Article 25", "Article 26", "Article 27", "Article 28"],
            importantPoints: "• Freedom of conscience\n• Right to practice religion\n• Right to propagate religion\n• Right to manage religious affairs\n• Freedom from religious taxes"
        },
        "right_to_constitutional_remedies": {
            title: "Right to Constitutional Remedies (Article 32)",
            article: "Article 32 of Indian Constitution",
            description: "Provides the right to move the Supreme Court for enforcement of fundamental rights.",
            solution: "Steps to enforce constitutional remedies:\n1. File writ petition in Supreme Court\n2. Engage a constitutional lawyer\n3. Provide evidence of rights violation\n4. Follow court procedures\n5. Comply with court orders",
            category: "Fundamental Rights",
            relatedLaws: ["Article 32", "Article 226", "Supreme Court Rules, 2013"],
            importantPoints: "• Right to approach Supreme Court\n• Types of writs available\n• Procedure for filing writs\n• Time limitations\n• Court fees and documentation"
        },
        // Directive Principles
        "directive_principles_basic": {
            title: "Basic Directive Principles (Article 36-51)",
            article: "Articles 36-51 of Indian Constitution",
            description: "Guidelines for state policy including social, economic, and political justice.",
            solution: "Implementation mechanisms:\n1. Legislative action\n2. Policy formulation\n3. Program implementation\n4. Public awareness\n5. Judicial interpretation",
            category: "Directive Principles",
            relatedLaws: ["Article 36", "Article 37", "Article 38", "Article 39", "Article 40"],
            importantPoints: "• Social justice\n• Economic justice\n• Political justice\n• Welfare state\n• Village panchayats"
        },
        // Constitutional Bodies
        "supreme_court": {
            title: "Supreme Court of India",
            article: "Articles 124-147 of Indian Constitution",
            description: "The highest judicial body in India with original, appellate, and advisory jurisdiction.",
            solution: "How to approach Supreme Court:\n1. File special leave petition\n2. File writ petition\n3. File public interest litigation\n4. Engage Supreme Court lawyer\n5. Follow court procedures",
            category: "Constitutional Bodies",
            relatedLaws: ["Article 124", "Supreme Court Rules, 2013", "Constitution of India"],
            importantPoints: "• Original jurisdiction\n• Appellate jurisdiction\n• Advisory jurisdiction\n• Judicial review\n• Contempt of court"
        },
        "president": {
            title: "President of India",
            article: "Articles 52-62 of Indian Constitution",
            description: "The head of state and first citizen of India with various constitutional powers.",
            solution: "Process for presidential actions:\n1. Constitutional consultation\n2. Cabinet advice\n3. Presidential assent\n4. Emergency powers\n5. Ordinance making",
            category: "Constitutional Bodies",
            relatedLaws: ["Article 52", "Article 53", "Article 54", "Article 55", "Article 56"],
            importantPoints: "• Executive powers\n• Legislative powers\n• Emergency powers\n• Military powers\n• Diplomatic powers"
        },
        "election_commission": {
            title: "Election Commission of India",
            article: "Article 324 of Indian Constitution",
            description: "The constitutional body responsible for conducting free and fair elections in India.",
            solution: "How to interact with Election Commission:\n1. Register as a voter\n2. File election complaints\n3. Report electoral violations\n4. Access electoral rolls\n5. Submit nomination papers",
            category: "Constitutional Bodies",
            relatedLaws: ["Article 324", "Representation of People Act, 1951", "Election Commission Act, 1991"],
            importantPoints: "• Superintendence of elections\n• Voter registration\n• Political party recognition\n• Model code of conduct\n• Electoral reforms",
            detailedInfo: {
                powers: "Powers and Functions:\n• Conduct of elections\n• Voter registration\n• Party recognition\n• Electoral rolls\n• Election monitoring",
                structure: "Structure:\n• Chief Election Commissioner\n• Election Commissioners\n• Regional Commissioners\n• State Election Officers\n• District Election Officers",
                initiatives: "Key Initiatives:\n• Voter ID cards\n• Electronic voting machines\n• Voter education\n• Electoral reforms\n• Campaign monitoring"
            }
        },
        "comptroller_auditor_general": {
            title: "Comptroller and Auditor General of India",
            article: "Article 148 of Indian Constitution",
            description: "The constitutional body responsible for auditing government accounts and ensuring financial accountability.",
            solution: "How to access CAG reports:\n1. Visit CAG website\n2. Access audit reports\n3. File RTI requests\n4. Report financial irregularities\n5. Access performance audits",
            category: "Constitutional Bodies",
            relatedLaws: ["Article 148", "CAG Act, 1971", "RTI Act, 2005"],
            importantPoints: "• Financial audit\n• Performance audit\n• Compliance audit\n• Public accounts\n• Government expenditure",
            detailedInfo: {
                functions: "Main Functions:\n• Audit of accounts\n• Financial reporting\n• Performance evaluation\n• Compliance checking\n• Public accountability",
                reports: "Types of Reports:\n• Audit reports\n• Performance reports\n• Compliance reports\n• Financial statements\n• Special reports",
                jurisdiction: "Jurisdiction:\n• Union government\n• State governments\n• Union territories\n• Public sector enterprises\n• Autonomous bodies"
            }
        },
        "union_public_service_commission": {
            title: "Union Public Service Commission",
            article: "Article 315 of Indian Constitution",
            description: "The constitutional body responsible for conducting civil service examinations and advising on civil service matters.",
            solution: "How to interact with UPSC:\n1. Apply for examinations\n2. Access exam notifications\n3. Download admit cards\n4. Check results\n5. File grievances",
            category: "Constitutional Bodies",
            relatedLaws: ["Article 315", "UPSC Regulations", "Civil Service Rules"],
            importantPoints: "• Civil service exams\n• Recruitment process\n• Service conditions\n• Promotions\n• Disciplinary matters",
            detailedInfo: {
                examinations: "Main Examinations:\n• Civil Services Exam\n• Engineering Services\n• Combined Defense Services\n• National Defense Academy\n• Combined Medical Services",
                functions: "Key Functions:\n• Conduct examinations\n• Recruitment\n• Promotions\n• Transfers\n• Disciplinary matters",
                advisory: "Advisory Role:\n• Service conditions\n• Recruitment rules\n• Promotion policies\n• Training programs\n• Departmental proceedings"
            }
        },
        "state_public_service_commission": {
            title: "State Public Service Commission",
            article: "Article 315 of Indian Constitution",
            description: "The constitutional body responsible for conducting state-level civil service examinations and advising on state civil service matters.",
            solution: "How to interact with SPSC:\n1. Apply for state exams\n2. Access notifications\n3. Download admit cards\n4. Check results\n5. File grievances",
            category: "Constitutional Bodies",
            relatedLaws: ["Article 315", "State Civil Service Rules", "State Public Service Commission Regulations"],
            importantPoints: "• State civil services\n• Recruitment process\n• Service conditions\n• Promotions\n• Disciplinary matters",
            detailedInfo: {
                examinations: "State Examinations:\n• State Civil Services\n• State Police Services\n• State Forest Services\n• State Engineering Services\n• State Medical Services",
                functions: "Key Functions:\n• State-level recruitment\n• Promotions\n• Transfers\n• Disciplinary matters\n• Service conditions",
                advisory: "Advisory Role:\n• State service rules\n• Recruitment policies\n• Promotion criteria\n• Training programs\n• Departmental proceedings"
            }
        },
        "national_human_rights_commission": {
            title: "National Human Rights Commission",
            article: "Protection of Human Rights Act, 1993",
            description: "The statutory body responsible for protecting and promoting human rights in India.",
            solution: "How to approach NHRC:\n1. File human rights complaints\n2. Access human rights reports\n3. Report violations\n4. Seek intervention\n5. Access human rights education",
            category: "Constitutional Bodies",
            relatedLaws: ["Protection of Human Rights Act, 1993", "Universal Declaration of Human Rights", "International Covenants"],
            importantPoints: "• Human rights protection\n• Complaint handling\n• Investigation\n• Recommendations\n• Human rights education",
            detailedInfo: {
                functions: "Main Functions:\n• Investigation of complaints\n• Human rights education\n• Research and studies\n• Policy recommendations\n• International cooperation",
                powers: "Powers:\n• Summoning witnesses\n• Requiring documents\n• Issuing recommendations\n• Conducting inquiries\n• Taking suo motu cognizance",
                initiatives: "Key Initiatives:\n• Human rights education\n• Research programs\n• Training workshops\n• Awareness campaigns\n• International cooperation"
            }
        },
        // Criminal Law
        "criminal_procedure": {
            title: "Criminal Procedure Code",
            article: "Code of Criminal Procedure, 1973",
            description: "The main legislation on procedure for administration of criminal justice in India.",
            solution: "Criminal procedure steps:\n1. FIR registration\n2. Investigation\n3. Charge sheet\n4. Trial\n5. Judgment\n6. Appeal",
            category: "Criminal Law",
            relatedLaws: ["CrPC, 1973", "Indian Penal Code, 1860", "Evidence Act, 1872"],
            importantPoints: "• FIR filing\n• Arrest procedures\n• Bail provisions\n• Trial process\n• Appeal rights",
            detailedInfo: {
                fir: "FIR (First Information Report):\n• Must be filed at the nearest police station\n• Can be filed by any person\n• Must contain basic information about the crime\n• Police must register FIR without delay",
                investigation: "Investigation Process:\n• Police collects evidence\n• Records statements\n• Conducts searches\n• Prepares charge sheet",
                trial: "Trial Process:\n• Framing of charges\n• Recording of evidence\n• Arguments\n• Judgment\n• Sentencing"
            }
        },
        "criminal_offenses": {
            title: "Major Criminal Offenses",
            article: "Indian Penal Code, 1860",
            description: "Common criminal offenses and their punishments under IPC.",
            solution: "Legal procedures for criminal offenses:\n1. File FIR\n2. Police investigation\n3. Court proceedings\n4. Trial\n5. Judgment\n6. Appeal if needed",
            category: "Criminal Law",
            relatedLaws: ["IPC, 1860", "CrPC, 1973", "Evidence Act, 1872"],
            importantPoints: "• Types of offenses\n• Punishments\n• Criminal intent\n• Defenses available\n• Burden of proof",
            detailedInfo: {
                theft: "Theft (Section 378):\n• Taking movable property\n• Without owner's consent\n• With dishonest intention\n• Punishment: Up to 3 years imprisonment",
                assault: "Assault (Section 351):\n• Making gesture or preparation\n• Intending to use criminal force\n• Punishment: Up to 3 months imprisonment",
                murder: "Murder (Section 300):\n• Causing death with intention\n• Knowledge of likely death\n• Punishment: Life imprisonment or death"
            }
        },
        // Civil Law
        "civil_procedure": {
            title: "Civil Procedure Code",
            article: "Code of Civil Procedure, 1908",
            description: "The main legislation on procedure for administration of civil justice in India.",
            solution: "Civil procedure steps:\n1. Plaint filing\n2. Summons\n3. Written statement\n4. Evidence\n5. Judgment\n6. Execution",
            category: "Civil Law",
            relatedLaws: ["CPC, 1908", "Limitation Act, 1963", "Court Fees Act, 1870"],
            importantPoints: "• Jurisdiction\n• Limitation period\n• Court fees\n• Evidence rules\n• Execution process",
            detailedInfo: {
                jurisdiction: "Jurisdiction:\n• Territorial jurisdiction\n• Pecuniary jurisdiction\n• Subject matter jurisdiction\n• Original and appellate jurisdiction",
                pleadings: "Pleadings:\n• Plaint\n• Written statement\n• Replication\n• Rejoinder",
                evidence: "Evidence:\n• Documentary evidence\n• Oral evidence\n• Expert evidence\n• Burden of proof"
            }
        },
        // Property Law
        "property_rights": {
            title: "Property Rights in India",
            article: "Article 300A of Indian Constitution",
            description: "The right to property is a constitutional right under Article 300A. It states that no person shall be deprived of his property save by authority of law.",
            solution: "Legal remedies for property rights violations:\n1. File a civil suit for property rights\n2. Approach the High Court under Article 226\n3. File a writ petition in Supreme Court\n4. Seek police protection if threatened\n5. File a complaint with the property ombudsman",
            category: "Property Rights",
            relatedLaws: ["Transfer of Property Act, 1882", "Registration Act, 1908", "Land Acquisition Act, 2013"],
            importantPoints: "• Property rights are fundamental rights\n• Documentation is crucial\n• Registration is mandatory\n• Adverse possession is recognized\n• Property can be acquired by government with compensation",
            detailedInfo: {
                transfer: "Transfer of Property:\n• Sale deed\n• Gift deed\n• Will\n• Partition deed\n• Registration requirements",
                acquisition: "Land Acquisition:\n• Public purpose\n• Compensation\n• Rehabilitation\n• Social impact assessment",
                possession: "Adverse Possession:\n• Continuous possession\n• Open possession\n• Hostile possession\n• Time period required"
            }
        },
        // Business Law
        "companies_act": {
            title: "Companies Act, 2013",
            article: "Companies Act, 1973",
            description: "The primary legislation governing companies in India, covering incorporation, management, and regulation of companies.",
            solution: "Legal procedures under Companies Act:\n1. Company registration\n2. Annual compliance\n3. Board meetings\n4. Shareholder meetings\n5. Financial reporting",
            category: "Business Law",
            relatedLaws: ["Companies Act, 2013", "SEBI Act, 1992", "Competition Act, 2002"],
            importantPoints: "• Company incorporation\n• Corporate governance\n• Shareholder rights\n• Board responsibilities\n• Financial reporting",
            detailedInfo: {
                incorporation: "Company Incorporation:\n• Digital signature certificate\n• Director identification number\n• Company name approval\n• Memorandum of association\n• Articles of association",
                compliance: "Annual Compliance:\n• Annual general meeting\n• Board meetings\n• Financial statements\n• Annual returns\n• Statutory registers",
                governance: "Corporate Governance:\n• Board composition\n• Audit committee\n• Nomination committee\n• Remuneration committee\n• Risk management"
            }
        },
        "contract_act": {
            title: "Indian Contract Act, 1872",
            article: "Indian Contract Act, 1872",
            description: "The law governing contracts in India, including formation, validity, and enforcement of contracts.",
            solution: "Contract law remedies:\n1. Specific performance\n2. Damages\n3. Injunction\n4. Rescission\n5. Quantum meruit",
            category: "Business Law",
            relatedLaws: ["Indian Contract Act, 1872", "Sale of Goods Act, 1930", "Partnership Act, 1932"],
            importantPoints: "• Contract formation\n• Consideration\n• Free consent\n• Contract validity\n• Breach of contract",
            detailedInfo: {
                formation: "Contract Formation:\n• Offer and acceptance\n• Consideration\n• Intention to create legal relations\n• Capacity to contract\n• Free consent",
                validity: "Contract Validity:\n• Lawful object\n• Not expressly declared void\n• Possibility of performance\n• Certainty of terms\n• Legal formalities",
                breach: "Breach of Contract:\n• Anticipatory breach\n• Actual breach\n• Remedies available\n• Damages calculation\n• Specific performance"
            }
        },
        "competition_act": {
            title: "Competition Act, 2002",
            article: "Competition Act, 2002",
            description: "Regulates competition and prevents anti-competitive practices in the market.",
            solution: "Steps for compliance:\n1. Market assessment\n2. Competition audit\n3. Policy review\n4. Training programs\n5. Regular monitoring",
            category: "Business Law",
            relatedLaws: ["Competition Commission Regulations", "MRTP Act", "Consumer Protection Act"],
            importantPoints: "• Anti-competitive agreements\n• Abuse of dominance\n• Combinations\n• Competition advocacy\n• Penalties",
            detailedInfo: {
                agreements: "Anti-competitive Agreements:\n• Price fixing\n• Market sharing\n• Bid rigging\n• Output restrictions\n• Exclusive dealing",
                dominance: "Abuse of Dominance:\n• Predatory pricing\n• Refusal to deal\n• Unfair conditions\n• Discriminatory practices\n• Market manipulation",
                combinations: "Regulation of Combinations:\n• Merger control\n• Acquisition control\n• Joint ventures\n• Asset acquisition\n• Control acquisition"
            }
        },
        "consumer_protection": {
            title: "Consumer Protection Act, 2019",
            article: "Consumer Protection Act, 2019",
            description: "Protects consumer rights and provides redressal mechanisms for consumer grievances.",
            solution: "Consumer protection steps:\n1. File complaints\n2. Access consumer courts\n3. Seek mediation\n4. Report unfair practices\n5. Access consumer education",
            category: "Business Law",
            relatedLaws: ["Consumer Protection Rules", "Consumer Courts Act", "Product Liability Act"],
            importantPoints: "• Consumer rights\n• Product liability\n• Unfair trade practices\n• Consumer courts\n• Mediation",
            detailedInfo: {
                rights: "Consumer Rights:\n• Right to safety\n• Right to information\n• Right to choice\n• Right to redressal\n• Right to consumer education",
                courts: "Consumer Courts:\n• District forums\n• State commissions\n• National commission\n• Mediation cells\n• Consumer protection councils",
                remedies: "Available Remedies:\n• Compensation\n• Replacement\n• Refund\n• Service correction\n• Cost recovery"
            }
        },
        // Family Law
        "hindu_marriage": {
            title: "Hindu Marriage Act, 1955",
            article: "Hindu Marriage Act, 1955",
            description: "The law governing Hindu marriages, including conditions, ceremonies, and grounds for divorce.",
            solution: "Legal procedures under Hindu Marriage Act:\n1. Marriage registration\n2. Divorce proceedings\n3. Maintenance claims\n4. Custody matters\n5. Property division",
            category: "Family Law",
            relatedLaws: ["Hindu Marriage Act, 1955", "Hindu Succession Act, 1956", "Hindu Minority Act, 1956"],
            importantPoints: "• Marriage conditions\n• Ceremonies\n• Divorce grounds\n• Maintenance\n• Custody",
            detailedInfo: {
                conditions: "Marriage Conditions:\n• Age requirements\n• Mental capacity\n• Prohibited relationships\n• Monogamy\n• Sound mind",
                divorce: "Divorce Grounds:\n• Adultery\n• Cruelty\n• Desertion\n• Conversion\n• Mental disorder",
                maintenance: "Maintenance Rights:\n• Spousal maintenance\n• Child maintenance\n• Interim maintenance\n• Permanent alimony\n• Enforcement"
            }
        },
        "muslim_marriage": {
            title: "Muslim Personal Law",
            article: "Muslim Personal Law (Shariat) Application Act, 1937",
            description: "The law governing Muslim marriages, including Nikah, Talaq, and maintenance under Islamic law.",
            solution: "Legal procedures under Muslim Law:\n1. Nikah registration\n2. Talaq proceedings\n3. Maintenance claims\n4. Custody matters\n5. Inheritance",
            category: "Family Law",
            relatedLaws: ["Muslim Personal Law Act, 1937", "Dissolution of Muslim Marriages Act, 1939", "Muslim Women Act, 1986"],
            importantPoints: "• Nikah requirements\n• Talaq procedures\n• Maintenance rights\n• Custody rules\n• Inheritance",
            detailedInfo: {
                nikah: "Nikah Requirements:\n• Offer and acceptance\n• Witnesses\n• Mehr\n• Capacity\n• Prohibited relationships",
                talaq: "Talaq Procedures:\n• Talaq-e-Ahsan\n• Talaq-e-Hasan\n• Talaq-e-Biddat\n• Revocation period\n• Registration",
                maintenance: "Maintenance Rights:\n• Iddat period\n• Mehr payment\n• Child maintenance\n• Wife's maintenance\n• Enforcement"
            }
        },
        "child_rights": {
            title: "Child Rights and Protection",
            article: "Juvenile Justice Act, 2015",
            description: "Laws protecting children's rights, including education, protection from exploitation, and juvenile justice.",
            solution: "Child protection measures:\n1. Child helpline\n2. Child welfare committee\n3. Juvenile justice board\n4. Child adoption\n5. Child labor prevention",
            category: "Family Law",
            relatedLaws: ["Juvenile Justice Act, 2015", "Right to Education Act, 2009", "Child Labor Act, 1986"],
            importantPoints: "• Right to education\n• Protection from exploitation\n• Juvenile justice\n• Child adoption\n• Child labor",
            detailedInfo: {
                education: "Right to Education:\n• Free and compulsory education\n• Age group coverage\n• School infrastructure\n• Teacher qualifications\n• Special provisions",
                protection: "Child Protection:\n• Child helpline\n• Child welfare committee\n• Special juvenile police\n• Child care institutions\n• Rehabilitation",
                adoption: "Child Adoption:\n• Central adoption resource authority\n• Adoption procedures\n• Eligibility criteria\n• Documentation\n• Post-adoption support"
            }
        },
        // Women's Rights Laws
        "dowry_prohibition": {
            title: "Dowry Prohibition Act, 1961",
            article: "Dowry Prohibition Act, 1961",
            description: "Prohibits the giving or taking of dowry and provides protection against dowry harassment.",
            solution: "Legal remedies for dowry harassment:\n1. File FIR under Section 498A IPC\n2. Approach Women's Protection Cell\n3. File complaint with National Commission for Women\n4. Seek help from women's NGOs\n5. File for divorce with maintenance",
            category: "Women's Rights",
            relatedLaws: ["IPC Section 498A", "Protection of Women from Domestic Violence Act, 2005", "Hindu Marriage Act, 1955"],
            importantPoints: "• Dowry is illegal\n• Protection against harassment\n• Punishment for dowry death\n• Property rights\n• Maintenance rights",
            detailedInfo: {
                definition: "Definition of Dowry:\n• Any property or valuable security\n• Given or agreed to be given\n• Before, during, or after marriage\n• By one party to another\n• By parents or relatives",
                punishment: "Punishment:\n• Imprisonment up to 5 years\n• Fine up to 15,000 rupees\n• Confiscation of dowry\n• Additional charges for dowry death",
                protection: "Protection Measures:\n• Anti-dowry officers\n• Women's protection cells\n• Special courts\n• Fast-track trials\n• Victim support services"
            }
        },
        "domestic_violence": {
            title: "Protection of Women from Domestic Violence Act, 2005",
            article: "Protection of Women from Domestic Violence Act, 2005",
            description: "Provides protection to women from domestic violence including physical, emotional, and economic abuse.",
            solution: "Steps to get protection:\n1. File complaint with Protection Officer\n2. Approach Magistrate Court\n3. Get Protection Order\n4. Seek Residence Order\n5. Get Maintenance Order",
            category: "Women's Rights",
            relatedLaws: ["IPC Section 498A", "Criminal Procedure Code, 1973", "Family Courts Act, 1984"],
            importantPoints: "• Protection orders\n• Residence rights\n• Maintenance rights\n• Custody rights\n• Compensation rights",
            detailedInfo: {
                types: "Types of Domestic Violence:\n• Physical abuse\n• Emotional abuse\n• Economic abuse\n• Sexual abuse\n• Verbal abuse",
                orders: "Protection Orders:\n• Protection order\n• Residence order\n• Maintenance order\n• Custody order\n• Compensation order",
                enforcement: "Enforcement:\n• Protection officers\n• Service providers\n• Shelter homes\n• Medical facilities\n• Counseling services"
            }
        },
        "sexual_harassment": {
            title: "Sexual Harassment of Women at Workplace Act, 2013",
            article: "Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013",
            description: "Prevents and addresses sexual harassment of women at workplace and provides for redressal mechanisms.",
            solution: "Steps to address harassment:\n1. File complaint with Internal Committee\n2. Approach Local Committee\n3. File police complaint\n4. Seek legal aid\n5. File civil suit",
            category: "Women's Rights",
            relatedLaws: ["Vishakha Guidelines", "IPC Section 354A", "Equal Remuneration Act, 1976"],
            importantPoints: "• Prevention measures\n• Complaint mechanism\n• Investigation process\n• Punishment provisions\n• Compensation rights",
            detailedInfo: {
                definition: "Definition of Sexual Harassment:\n• Physical contact\n• Unwelcome advances\n• Sexual favors\n• Sexually colored remarks\n• Pornography",
                committees: "Complaint Committees:\n• Internal Committee\n• Local Committee\n• District Officer\n• Appellate Authority\n• Conciliation Officer",
                process: "Redressal Process:\n• Written complaint\n• Inquiry process\n• Interim relief\n• Final report\n• Implementation"
            }
        },
        "maternity_benefit": {
            title: "Maternity Benefit Act, 1961",
            article: "Maternity Benefit Act, 1961",
            description: "Regulates employment of women during certain periods before and after childbirth and provides maternity benefits.",
            solution: "Steps to claim benefits:\n1. Inform employer\n2. Submit required documents\n3. Apply for leave\n4. Claim benefits\n5. File complaint if denied",
            category: "Women's Rights",
            relatedLaws: ["Factories Act, 1948", "Equal Remuneration Act, 1976", "Employee State Insurance Act, 1948"],
            importantPoints: "• Maternity leave\n• Medical bonus\n• Nursing breaks\n• Crèche facility\n• Protection from dismissal",
            detailedInfo: {
                benefits: "Maternity Benefits:\n• 26 weeks paid leave\n• Medical bonus\n• Nursing breaks\n• Crèche facility\n• Work from home option",
                eligibility: "Eligibility:\n• Minimum 80 days employment\n• Notice period\n• Medical certificate\n• Establishment size\n• Employment type",
                protection: "Protection Measures:\n• No dismissal during leave\n• No heavy work\n• No night shifts\n• No overtime\n• No standing work"
            }
        },
        "equal_remuneration": {
            title: "Equal Remuneration Act, 1976",
            article: "Equal Remuneration Act, 1976",
            description: "Ensures equal remuneration for men and women workers for same work or work of similar nature.",
            solution: "Steps to claim equal pay:\n1. Document work similarity\n2. File complaint with Labor Officer\n3. Approach Labor Court\n4. File civil suit\n5. Contact women's commission",
            category: "Women's Rights",
            relatedLaws: ["Minimum Wages Act, 1948", "Payment of Wages Act, 1936", "Factories Act, 1948"],
            importantPoints: "• Equal pay for equal work\n• No gender discrimination\n• Recruitment equality\n• Promotion equality\n• Service conditions",
            detailedInfo: {
                scope: "Scope of Act:\n• Same work\n• Similar work\n• Recruitment\n• Promotions\n• Service conditions",
                enforcement: "Enforcement:\n• Labor officers\n• Advisory committees\n• Inspectors\n• Courts\n• Appellate authorities",
                remedies: "Legal Remedies:\n• Complaint to authorities\n• Civil suit\n• Criminal prosecution\n• Compensation\n• Reinstatement"
            }
        },
        "women_empowerment": {
            title: "Women Empowerment Laws in India",
            article: "Various Constitutional and Statutory Provisions",
            description: "Comprehensive overview of laws protecting and empowering women in India.",
            solution: "Steps for women's empowerment:\n1. Awareness of legal rights\n2. Access to legal aid\n3. Support from women's organizations\n4. Government schemes\n5. Educational opportunities",
            category: "Women's Rights",
            relatedLaws: ["Article 15(3)", "Article 39(a)", "Article 42", "Article 45", "Article 51A(e)"],
            importantPoints: "• Constitutional guarantees\n• Gender equality\n• Educational rights\n• Employment rights\n• Political representation",
            detailedInfo: {
                constitutional: "Constitutional Provisions:\n• Article 15(3): Special provisions for women\n• Article 39(a): Equal right to livelihood\n• Article 42: Maternity relief\n• Article 45: Education for children\n• Article 51A(e): Fundamental duties",
                schemes: "Government Schemes:\n• Beti Bachao Beti Padhao\n• Sukanya Samriddhi Yojana\n• Mahila Shakti Kendra\n• Working Women Hostel\n• One Stop Centre Scheme",
                organizations: "Support Organizations:\n• National Commission for Women\n• State Women Commissions\n• Women's Police Stations\n• Women's NGOs\n• Legal Aid Cells"
            }
        },
        "women_education": {
            title: "Right to Education for Women",
            article: "Right to Education Act, 2009 and Article 45",
            description: "Legal provisions ensuring women's right to education and literacy.",
            solution: "Steps to access education:\n1. Enroll in government schools\n2. Apply for scholarships\n3. Access adult education programs\n4. Join skill development courses\n5. Pursue higher education",
            category: "Women's Rights",
            relatedLaws: ["Right to Education Act, 2009", "Article 45", "Article 15(3)", "Article 21A"],
            importantPoints: "• Free education\n• Equal opportunities\n• Special provisions\n• Adult education\n• Vocational training",
            detailedInfo: {
                provisions: "Educational Provisions:\n• Free and compulsory education\n• Special schools for girls\n• Hostel facilities\n• Scholarship programs\n• Adult literacy programs",
                benefits: "Educational Benefits:\n• Free textbooks\n• Mid-day meals\n• Transportation\n• Hostel accommodation\n• Skill development",
                schemes: "Educational Schemes:\n• Kasturba Gandhi Balika Vidyalaya\n• Mahila Samakhya\n• National Literacy Mission\n• Adult Education Program\n• Digital Literacy"
            }
        },
        "women_health": {
            title: "Women's Health Rights",
            article: "Various Health Laws and Policies",
            description: "Legal framework protecting women's health rights and access to healthcare.",
            solution: "Steps to access healthcare:\n1. Register for health schemes\n2. Access primary health centers\n3. Utilize maternity benefits\n4. Access reproductive health services\n5. Seek mental health support",
            category: "Women's Rights",
            relatedLaws: ["Maternity Benefit Act, 1961", "Medical Termination of Pregnancy Act, 1971", "PCPNDT Act, 1994"],
            importantPoints: "• Reproductive health\n• Maternal healthcare\n• Mental health\n• Nutrition rights\n• Healthcare access",
            detailedInfo: {
                health_schemes: "Health Schemes:\n• Janani Suraksha Yojana\n• Pradhan Mantri Matru Vandana Yojana\n• Reproductive and Child Health Program\n• National Health Mission\n• Mental Health Program",
                facilities: "Healthcare Facilities:\n• Primary Health Centers\n• Community Health Centers\n• District Hospitals\n• Women's Hospitals\n• Mental Health Centers",
                services: "Health Services:\n• Antenatal care\n• Postnatal care\n• Family planning\n• Reproductive health\n• Mental health counseling"
            }
        },
        "women_property": {
            title: "Women's Property Rights",
            article: "Hindu Succession Act, 1956 (Amended 2005)",
            description: "Legal provisions ensuring women's property and inheritance rights.",
            solution: "Steps to claim property rights:\n1. Register property in your name\n2. File succession certificate\n3. Claim inheritance rights\n4. Access legal aid\n5. File property disputes",
            category: "Women's Rights",
            relatedLaws: ["Hindu Succession Act, 1956", "Muslim Personal Law", "Indian Succession Act, 1925"],
            importantPoints: "• Equal inheritance rights\n• Property ownership\n• Agricultural land rights\n• Joint property rights\n• Succession rights",
            detailedInfo: {
                inheritance: "Inheritance Rights:\n• Equal share in property\n• Right to agricultural land\n• Right to ancestral property\n• Right to self-acquired property\n• Right to will property",
                documentation: "Property Documentation:\n• Property registration\n• Succession certificate\n• Will registration\n• Property partition\n• Title deeds",
                remedies: "Legal Remedies:\n• Property partition\n• Succession certificate\n• Will probate\n• Property disputes\n• Legal aid services"
            }
        },
        "women_employment": {
            title: "Women's Employment Rights",
            article: "Various Labor Laws and Constitutional Provisions",
            description: "Comprehensive framework protecting women's employment rights and workplace equality.",
            solution: "Steps to protect employment rights:\n1. Document employment terms\n2. Report workplace harassment\n3. Claim maternity benefits\n4. Access equal pay\n5. File discrimination complaints",
            category: "Women's Rights",
            relatedLaws: ["Equal Remuneration Act, 1976", "Maternity Benefit Act, 1961", "Factories Act, 1948"],
            importantPoints: "• Equal pay\n• Maternity benefits\n• Workplace safety\n• Anti-harassment measures\n• Career opportunities",
            detailedInfo: {
                benefits: "Employment Benefits:\n• Equal remuneration\n• Maternity leave\n• Crèche facilities\n• Night shift protection\n• Career advancement",
                protection: "Workplace Protection:\n• Anti-harassment committees\n• Safety measures\n• Health facilities\n• Working hours\n• Leave provisions",
                schemes: "Employment Schemes:\n• Support to Training and Employment Program\n• Mahila Coir Yojana\n• Women's Self Help Groups\n• Skill development\n• Entrepreneurship support"
            }
        },
        "motor_vehicles_act": {
            title: "Motor Vehicles Act, 1988",
            article: "Motor Vehicles Act, 1988",
            description: "The primary legislation governing road transport and traffic regulations in India.",
            solution: "Steps for traffic compliance:\n1. Vehicle registration\n2. Driving license\n3. Insurance coverage\n4. Traffic rules adherence\n5. Vehicle maintenance",
            category: "Traffic Laws",
            relatedLaws: ["Central Motor Vehicles Rules, 1989", "State Motor Vehicles Rules", "Road Safety Act"],
            importantPoints: "• Vehicle registration\n• Driving license\n• Traffic rules\n• Insurance requirements\n• Road safety",
            detailedInfo: {
                registration: "Vehicle Registration:\n• New registration\n• Transfer of ownership\n• Change of address\n• Vehicle modification\n• Registration renewal",
                licensing: "Driving License:\n• Learner's license\n• Permanent license\n• License renewal\n• License endorsement\n• International license",
                rules: "Traffic Rules:\n• Speed limits\n• Traffic signals\n• Parking rules\n• Vehicle documents\n• Safety equipment"
            }
        },
        "road_safety": {
            title: "Road Safety Rules and Regulations",
            article: "Various Traffic Rules and Regulations",
            description: "Comprehensive guidelines for road safety and traffic management.",
            solution: "Road safety measures:\n1. Follow traffic signals\n2. Wear safety gear\n3. Maintain vehicle condition\n4. Follow speed limits\n5. Report violations",
            category: "Traffic Laws",
            relatedLaws: ["Motor Vehicles Act, 1988", "Road Safety Act", "State Traffic Rules"],
            importantPoints: "• Traffic signals\n• Speed limits\n• Safety equipment\n• Vehicle maintenance\n• Emergency response",
            detailedInfo: {
                safety_measures: "Safety Measures:\n• Seat belts\n• Helmets\n• Child restraints\n• Emergency equipment\n• First aid kits",
                violations: "Common Violations:\n• Speeding\n• Red light jumping\n• Drunk driving\n• Overloading\n• Wrong-side driving",
                penalties: "Penalties:\n• Fines\n• License suspension\n• Vehicle impoundment\n• Imprisonment\n• Community service"
            }
        }
    }
};

// Cache for loaded data
const dataCache = new Map();

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const resultsSection = document.getElementById('resultsSection');

    // Get the search query from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('q');
    const category = urlParams.get('category');

    // If there's a category in the URL, load category page
    if (category) {
        loadCategoryPage(category);
        return;
    }

    // If there's a search query in the URL, perform the search
    if (searchQuery) {
        searchInput.value = searchQuery;
        performSearch(searchQuery);
    }

    // Handle new searches
    searchButton.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query) {
            performSearch(query);
        }
    });

    // Handle Enter key press
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                performSearch(query);
            }
        }
    });

    function loadCategoryPage(categoryId) {
        const resultsSection = document.getElementById('resultsSection');
        if (!resultsSection) return;

        resultsSection.innerHTML = `
            <div class="result-card">
                <div class="loading">
                    <i class="fas fa-spinner fa-spin"></i>
                    <p>Loading category information...</p>
                </div>
            </div>
        `;

        try {
            const categoryData = loadCategoryData(categoryId);
            const categoryInfo = legalDatabase.categories[categoryId];
            
            resultsSection.innerHTML = `
                <div class="category-header">
                    <h1><i class="fas ${categoryInfo.icon}"></i> ${categoryInfo.name}</h1>
                    <p>${categoryInfo.description}</p>
                </div>
                <div class="category-content">
                    ${categoryData.map(item => `
                        <div class="result-card">
                            <h2>${item.title}</h2>
                            <div class="article">Legal Reference: ${item.article}</div>
                            <div class="description">${item.description}</div>
                            ${item.relatedLaws ? `
                                <div class="related-laws">
                                    <h3>Related Laws:</h3>
                                    <ul>
                                        ${item.relatedLaws.map(law => `<li>${law}</li>`).join('')}
                                    </ul>
                                </div>
                            ` : ''}
                            ${item.importantPoints ? `
                                <div class="important-points">
                                    <h3>Important Points:</h3>
                                    <p>${item.importantPoints}</p>
                                </div>
                            ` : ''}
                            <div class="action-buttons">
                                <button class="action-btn" onclick="showMoreDetails('${item.title}')">
                                    <i class="fas fa-info-circle"></i> More Details
                                </button>
                                <button class="action-btn" onclick="printResult('${item.title}')">
                                    <i class="fas fa-print"></i> Print
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } catch (error) {
            resultsSection.innerHTML = `
                <div class="result-card error">
                    <h2>Error Loading Category</h2>
                    <p>Unable to load category information. Please try again later.</p>
                </div>
            `;
        }
    }

    function loadCategoryData(categoryId) {
        // Check cache first
        if (dataCache.has(categoryId)) {
            return dataCache.get(categoryId);
        }

        // Filter data by category
        const categoryData = Object.values(legalDatabase.data)
            .filter(item => item.category === legalDatabase.categories[categoryId].name);
        
        // Cache the data
        dataCache.set(categoryId, categoryData);
        return categoryData;
    }

    function performSearch(query) {
        // Update URL with search query
        const newUrl = `results.html?q=${encodeURIComponent(query)}`;
        window.history.pushState({}, '', newUrl);

        // Show loading state
        resultsSection.innerHTML = `
            <div class="result-card">
                <div class="loading">
                    <i class="fas fa-spinner fa-spin"></i>
                    <p>Searching legal database...</p>
                </div>
            </div>
        `;

        try {
            // Search in the legal database
            const results = searchLegalInfo(query);

            // Display results
            if (results.length === 0) {
                resultsSection.innerHTML = `
                    <div class="result-card">
                        <h2>No Results Found</h2>
                        <p>Please try different keywords or check your spelling.</p>
                        <div class="suggestions">
                            <h3>Try searching for:</h3>
                            <ul>
                                ${Object.entries(legalDatabase.categories)
                                    .map(([id, cat]) => `<li><a href="?category=${id}">${cat.name}</a></li>`)
                                    .join('')}
                            </ul>
                        </div>
                    </div>
                `;
                return;
            }

            const resultsHTML = results.map(result => `
                <div class="result-card">
                    <h2>${result.title}</h2>
                    <div class="article">Legal Reference: ${result.article}</div>
                    <div class="category">Category: ${result.category}</div>
                    <div class="description">${result.description}</div>
                    ${result.relatedLaws ? `
                        <div class="related-laws">
                            <h3>Related Laws:</h3>
                            <ul>
                                ${result.relatedLaws.map(law => `<li>${law}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                    ${result.importantPoints ? `
                        <div class="important-points">
                            <h3>Important Points:</h3>
                            <p>${result.importantPoints}</p>
                        </div>
                    ` : ''}
                    <div class="solution">
                        <h3>Legal Solutions and Penalties:</h3>
                        <p>${result.solution}</p>
                    </div>
                    <div class="action-buttons">
                        <button class="action-btn" onclick="showMoreDetails('${result.title}')">
                            <i class="fas fa-info-circle"></i> More Details
                        </button>
                        <button class="action-btn" onclick="printResult('${result.title}')">
                            <i class="fas fa-print"></i> Print
                        </button>
                    </div>
                </div>
            `).join('');

            resultsSection.innerHTML = resultsHTML;
        } catch (error) {
            resultsSection.innerHTML = `
                <div class="result-card error">
                    <h2>Error Performing Search</h2>
                    <p>Unable to perform search. Please try again later.</p>
                </div>
            `;
        }
    }

    function searchLegalInfo(query) {
        query = query.toLowerCase();
        const queryWords = query.split(/\s+/);
        const results = [];
        const searchIndex = new Map();

        // Create search index for faster searching
        Object.entries(legalDatabase.data).forEach(([key, item]) => {
            const searchableText = `${item.title} ${item.description} ${item.category} ${item.article} ${item.importantPoints || ''}`.toLowerCase();
            const words = searchableText.split(/\s+/);
            
            words.forEach(word => {
                if (!searchIndex.has(word)) {
                    searchIndex.set(word, new Set());
                }
                searchIndex.get(word).add(key);
            });
        });

        // Find matching entries using the search index
        const matchingKeys = new Set();
        queryWords.forEach(word => {
            if (searchIndex.has(word)) {
                searchIndex.get(word).forEach(key => {
                    matchingKeys.add(key);
                });
            }
        });

        // Convert matching keys to results
        matchingKeys.forEach(key => {
            results.push(legalDatabase.data[key]);
        });

        // Sort results by relevance
        results.sort((a, b) => {
            const aScore = calculateRelevanceScore(a, queryWords);
            const bScore = calculateRelevanceScore(b, queryWords);
            return bScore - aScore;
        });

        return results;
    }

    function calculateRelevanceScore(item, queryWords) {
        const searchableText = `${item.title} ${item.description} ${item.category} ${item.article} ${item.importantPoints || ''}`.toLowerCase();
        let score = 0;

        queryWords.forEach(word => {
            if (item.title.toLowerCase().includes(word)) score += 3;
            if (item.article.toLowerCase().includes(word)) score += 2;
            if (item.description.toLowerCase().includes(word)) score += 1;
            if (item.importantPoints && item.importantPoints.toLowerCase().includes(word)) score += 1;
        });

        return score;
    }

    // Modal functionality
    window.showMoreDetails = function(title) {
        const result = Object.values(legalDatabase.data).find(item => item.title === title);
        if (result) {
            const modalContent = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <h2>${result.title}</h2>
                    <div class="modal-body">
                        <div class="article">Legal Reference: ${result.article}</div>
                        <div class="description">${result.description}</div>
                        ${result.relatedLaws ? `
                            <div class="related-laws">
                                <h3>Related Laws:</h3>
                                <ul>
                                    ${result.relatedLaws.map(law => `<li>${law}</li>`).join('')}
                                </ul>
                            </div>
                        ` : ''}
                        ${result.importantPoints ? `
                            <div class="important-points">
                                <h3>Important Points:</h3>
                                <p>${result.importantPoints}</p>
                            </div>
                        ` : ''}
                        ${result.detailedInfo ? `
                            <div class="detailed-info">
                                <h3>Detailed Information:</h3>
                                ${Object.entries(result.detailedInfo).map(([key, value]) => `
                                    <div class="info-section">
                                        <h4>${key.charAt(0).toUpperCase() + key.slice(1)}</h4>
                                        <p>${value}</p>
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}
                        <div class="solution">
                            <h3>Legal Solutions and Penalties:</h3>
                            <p>${result.solution}</p>
                        </div>
                    </div>
                </div>
            `;

            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.innerHTML = modalContent;
            document.body.appendChild(modal);

            const closeBtn = modal.querySelector('.close');
            closeBtn.onclick = () => modal.remove();

            window.onclick = (event) => {
                if (event.target == modal) {
                    modal.remove();
                }
            };
        }
    };

    // Print functionality
    window.printResult = function(title) {
        const result = Object.values(legalDatabase.data).find(item => item.title === title);
        if (result) {
            const printWindow = window.open('', '_blank');
            printWindow.document.write(`
                <html>
                    <head>
                        <title>${result.title}</title>
                        <style>
                            body { font-family: Arial, sans-serif; padding: 20px; }
                            h1, h2, h3 { color: #2c3e50; }
                            .section { margin-bottom: 20px; }
                        </style>
                    </head>
                    <body>
                        <h1>${result.title}</h1>
                        <div class="section">
                            <h2>Legal Reference</h2>
                            <p>${result.article}</p>
                        </div>
                        <div class="section">
                            <h2>Description</h2>
                            <p>${result.description}</p>
                        </div>
                        ${result.relatedLaws ? `
                            <div class="section">
                                <h2>Related Laws</h2>
                                <ul>
                                    ${result.relatedLaws.map(law => `<li>${law}</li>`).join('')}
                                </ul>
                            </div>
                        ` : ''}
                        ${result.importantPoints ? `
                            <div class="section">
                                <h2>Important Points</h2>
                                <p>${result.importantPoints}</p>
                            </div>
                        ` : ''}
                        <div class="section">
                            <h2>Legal Solutions and Penalties</h2>
                            <p>${result.solution}</p>
                        </div>
                    </body>
                </html>
            `);
            printWindow.document.close();
            printWindow.print();
        }
    };
}); 