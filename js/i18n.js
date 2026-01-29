// Internationalization (i18n) configuration for Intelligent Battery website
// Supports Chinese (zh) and English (en)

const translations = {
    zh: {
        nav: {
            home: "首页",
            team: "团队介绍",
            news: "动态与成果",
            recruit: "加入我们"
        },
        hero: {
            index_title: "智御",
            index_subtitle: "AI肿瘤免疫药物自主设计平台",
            index_description: "AI自主药物设计平台，超越平台化的新定义",
            learn_more: "了解更多",
            team_title: "世界一流的研究团队",
            team_subtitle: "汇聚跨学科精英，攻克制药领域的终极难题",
            news_title: "项目动态与科研成果",
            news_subtitle: "记录我们的每一步突破与创新。",
            recruit_title: "AI药物设计的明天就在眼前",
            recruit_subtitle: "开放招募：诚邀有志于药物研发、医学背景与人工智能交叉领域的青年才俊加入。"
        },
        sections: {
            intro: "项目介绍",
            faq: "常见问题",
            leader: "项目负责人",
            members: "核心成员",
            mentors: "项目导师",
            students: "项目学生",
            gallery: "团队风采",
            updates: "最新进展",
            papers: "论文与专利",
            timeline: "项目时间线",
            awards: "获奖荣誉",
            positions: "开放职位",
            contact: "联系方式"
        },
        // Team specific translations
        team: {
            leader_name: "余峰 (Dr. Feng Yu)",
            leader_role: "项目负责人 / 北京中关村学院导师",
            leader_desc: "在中国科学院自动化研究所联合微软亚洲研究院完成博士学位，曾在深势科技、字节跳动、阿里巴巴等知名企业担任研究员。研究方向包括分子建模、推荐系统等，专注于大规模预训练分子搜索与生成、天然产物代谢组学、分子育种以及数据知识智能体的开发。中关村人工智能研究院研究员，主要从事科学智能研究工作。主持过产业智能等重大专项，发表论文二十余篇，引用四千余次。",
            mentor1_name: "何亮",
            mentor1_role: "北京中关村学院资深研究员",
            mentor1_desc: "中国科学技术大学计算机专业学士和博士,研究方向涵盖生物基础模型、计算生物学、机器学习、图数据管理与知识图谱。",
            mentor1_detail_title: "研究背景：",
            mentor1_detail: "北京中关村学院资深研究员，中国科学技术大学计算机专业学士和博士。他曾任前微软亚洲研究院和微软研究院科学智能中心 (Microsoft Research AI for Science) 高级研究员。研究方向涵盖生物基础模型、计算生物学、机器学习、图数据管理与知识图谱。曾在 Nature Machine Intelligence、Genome Biology、 Briefings in Bioinformatics、IEEE Transaction on Big Data、VLDB、NeurIPS、KDD、ACL、SIGIR、RecSys等顶级期刊与会议上发表多篇论文。他是中国电子工业出版社出版《知识图谱：概念与技术》的作者之一，微软开源项目 Microsoft Graph Engine 的核心贡献者之一，开发的系统曾为微软Bing、Xbox等全球线上产品提供实时服务，并主导研发了强类型 RDF 引擎 Stylus。现为Nature Machine Intelligence等期刊审稿人。",
            mentor2_name: "周旷奇",
            mentor2_role: "北京中关村学院导师",
            mentor2_desc: "新加坡国立大学电子计算机工程系博士,曾主持或参与多个科学智能相关的落地应用和开源项目。",
            mentor2_detail_title: "研究背景：",
            mentor2_detail: "博士毕业于新加坡国立大学电子计算机工程系。主要从事科学智能、强化学习方面的研究。曾主持或参与多个科学智能相关的落地应用和开源项目，在ICML等机器学习顶级会议上发表多篇论文，具有丰富的学术研究和应用算法研究经验。",
            mentor3_name: "魏宝乐",
            mentor3_role: "北京中关村学院导师",
            mentor3_desc: "博士毕业于北京大学王选计算机研究所，从事AI for Science、科学智能体等研究。",
            mentor3_detail_title: "研究背景：",
            mentor3_detail: "博士毕业于北京大学王选计算机研究所，现就职于北京中关村学院及中关村人工智能研究院。主要从事AI for Science、科学智能体、文档分析与理解等方面研究工作。在 NeurIPS、AAAI、ICASSP 等相关重要国际学术会议发表论文十余篇，获国家发明专利授权2项，并参与国家重点研发计划、国家自然科学基金面上项目等多项重点项目。",
            mentor4_name: "黄永达",
            mentor4_role: "北京中关村学院导师",
            mentor4_desc: "北京航空航天大学计算材料学博士，从事第一性原理计算与量子蒙特卡洛研究。",
            mentor4_detail_title: "研究背景：",
            mentor4_detail: "北京航空航天大学计算材料学博士，斯洛伐克科学院博士后。硕博主要从事研究基于密度泛函理论的晶格热导率、电导率的第一性原理计算，参与国家重点研发专项一个，获得软件著作权一项。博士后期间，在欧盟Trex项目下于斯洛伐克科学院，主要研究传统、神经网络量子蒙特卡洛计算方法与应用，参与欧盟项目三个。共计以第一作者、通讯作者发表SCI期刊论文8余篇。",
            mentor5_name: "李永恒",
            mentor5_role: "北京中关村学院导师",
            mentor5_desc: "工学博士，从事机器学习势函数开发、功能材料输运计算等研究。",
            mentor5_detail_title: "研究背景：",
            mentor5_detail: "工学博士。主要从事机器学习势函数开发、功能材料输运的计算方法与性质等方面研究工作。作为核心成员参与2021年国家重点研发计划，负责非弹性散射实验及相关计算模拟。近五年在Advanced Materials，Advanced Functional Materials、Nano Letters、Physical Review B等国际权威期刊发表SCI论文10篇。",
            mentor6_name: "柳佳晖",
            mentor6_role: "北京中关村学院导师",
            mentor6_desc: "中关村人工智能研究院研究员，从事AI+材料智能设计与微观机理研究。",
            mentor6_detail_title: "研究背景：",
            mentor6_detail: "中关村人工智能研究院研究员。主要从事AI+材料领域的智能设计与微观机理研究，致力于构建融合机器学习算法与物理约束的多尺度模拟框架，基于该框架揭示高熵合金等复杂材料体系中的辐照损伤、塑性变形及缺陷演化等微观机制，进一步开发机器学习力场构建与性质计算平台，推动新型材料的智能化设计与发现。",
            mentor7_name: "陆子恒",
            mentor7_role: "项目导师",
            mentor7_desc: "项目导师",
            mentor7_detail_title: "研究背景：",
            mentor7_detail: "暂无详细信息",
            mentor8_name: "魏宝乐",
            mentor8_role: "北京中关村学院导师",
            mentor8_desc: "博士毕业于北京大学王选计算机研究所，从事AI for Science、科学智能体等研究。",
            mentor8_detail_title: "研究背景：",
            mentor8_detail: "博士毕业于北京大学王选计算机研究所，现就职于北京中关村学院及中关村人工智能研究院。主要从事AI for Science、科学智能体、文档分析与理解等方面研究工作。在 NeurIPS、AAAI、ICASSP 等相关重要国际学术会议发表论文十余篇，获国家发明专利授权2项，并参与国家重点研发计划、国家自然科学基金面上项目等多项重点项目。",
            mentor9_name: "温健",
            mentor9_role: "北京中关村学院导师",
            mentor9_desc: "京都大学博士，从事多物理场数值仿真、高性能计算与AI代理模型研究。",
            mentor9_detail_title: "研究背景：",
            mentor9_detail: "京都大学博士。主要从事多物理场数值仿真、高性能计算与AI代理模型等方面研究工作。曾深度参与国产自主工业仿真软件内核求解器开发，独立负责锂电池、燃料电池、拉格朗日粒子法等多物理场求解模块开发，参与开发的电子散热模块已在华为、海思实现对国外商业软件的国产化替代，CAE经验涵盖流动、传热、辐射、多相流、燃烧、电化学、粒子法、气动声学、电子散热等多个领域。目前聚焦AI+新材料多尺度仿真建模，致力于打破微观材料性能与宏观服役性能之间的尺度鸿沟。",
            student1_name: "边子涵",
            student1_role: "项目学生",
            student1_desc: "项目学生",
            student1_detail_title: "简介：",
            student1_detail: "暂无详细信息",
            student2_name: "李安亿",
            student2_role: "项目学生",
            student2_desc: "中国人民大学高瓴人工智能学院博士生，研究AI材料设计。",
            student2_detail_title: "简介：",
            student2_detail: "中国人民大学高瓴人工智能学院博士生，主要研究方向为人工智能材料设计，聚焦于液态电解质等复杂体系的模型架构研究。目前已发表 CCF-A 类论文五篇。",
            student3_name: "吕丁阳",
            student3_role: "项目学生",
            student3_desc: "中科院自动化所博士，研究基于智能体的材料设计。",
            student3_detail_title: "简介：",
            student3_detail: "中国科学院自动化研究所计算机应用技术专业博士，主要研究方向为基于智能体的材料设计与材料基础表征方法，致力于打造AI时代的材料设计新范式，曾获ICAIS大会2025最佳论文奖。",
            student4_name: "吴倩云",
            student4_role: "项目学生",
            student4_desc: "项目学生",
            student4_detail_title: "简介：",
            student4_detail: "暂无详细信息",
            student5_name: "尹富声",
            student5_role: "项目学生",
            student5_desc: "天津大学化学工程博士，研究固体电解质改性与AI+光谱。",
            student5_detail_title: "简介：",
            student5_detail: "天津大学化学工程博士，主要从事固体电解质的改性与理论模拟研究，相关方法在固体电解质体系及电催化体系中具有重要应用价值。目前聚焦于人工智能与光谱解析的交叉研究方向（AI+光谱），致力于将机器学习与物理化学机理相结合，提升材料结构与性能表征与解析效率。已在 SCI 期刊发表学术论文十余篇。",
            student6_name: "张伯䶮",
            student6_role: "项目学生",
            student6_desc: "中国科学院大学控制科学与工程博士生，研究晶体结构设计。",
            student6_detail_title: "简介：",
            student6_detail: "中国科学院大学前沿交叉科学学院控制科学与工程博士生，主要研究方向为基于生成式人工智能的晶体结构设计。目前聚焦于高离子导固态电解质结构生成的研究，致力于将深度学习中的生成模型算法与晶体学原理深度融合，探索数据驱动的材料发现新范式。",
            leader_desc_full: "人工智能与新能源交叉领域专家，拥有10年以上电池管理系统研发经验。主导过多项国家级重点研发计划，发表SCI论文50余篇。",
            member1_name: "李明 (Ming Li)",
            member1_role: "算法工程师",
            member1_desc: "专注于深度学习与时间序列预测，负责SOC/SOH核心算法开发。",
            member1_desc_full: "专注于深度学习与时间序列预测，负责SOC/SOH核心算法开发。",
            member1_skills_title: "专业技能：",
            member1_skills_1: "深度学习框架：PyTorch, TensorFlow, Keras",
            member1_skills_2: "时序预测：LSTM, GRU, Transformer",
            member1_skills_3: "电池建模：Thevenin模型, 二阶RC等效电路模型",
            member1_skills_4: "开发经历：主导SOC估算模块开发，实测误差<1.8%",
            member1_edu_title: "教育背景：",
            member1_edu: "清华大学自动化系硕士（2023），研究方向为机器学习在能源系统中的应用",
            member2_name: "王晓 (Xiao Wang)",
            member2_role: "嵌入式系统专家",
            member2_desc: "负责边缘计算节点的硬件架构设计与实时操作系统优化。",
            member2_desc_full: "负责边缘计算节点的硬件架构设计与实时操作系统优化。",
            member2_skills_title: "专业技能：",
            member2_skills_1: "硬件平台：ARM Cortex-M系列, TI C2000 DSP, FPGA",
            member2_skills_2: "实时系统：FreeRTOS, RT-Thread, 嵌入式Linux",
            member2_skills_3: "通信协议：CAN, CAN FD, Ethernet, MQTT",
            member2_skills_4: "设计成就：完成车规级BMS采集板设计，通过ISO 26262功能安全认证",
            member2_edu_title: "教育背景：",
            member2_edu: "北京理工大学电子工程系硕士（2022），主攻车载网络与嵌入式系统",
            member3_name: "Sarah Chen",
            member3_role: "数据科学家",
            member3_desc: "擅长大数据挖掘与云端平台构建，保障海量电池数据的高效处理。",
            member3_desc_full: "擅长大数据挖掘与云端平台构建，保障海量电池数据的高效处理。",
            member3_skills_title: "专业技能：",
            member3_skills_1: "大数据技术：Spark, Flink, Kafka, Hadoop",
            member3_skills_2: "云平台：AWS, Azure, Kubernetes, Docker",
            member3_skills_3: "数据库：TimescaleDB, InfluxDB, PostgreSQL",
            member3_skills_4: "系统架构：设计支持百万级电池单体并发监控的云平台",
            member3_edu_title: "教育背景：",
            member3_edu: "Stanford University计算机科学硕士（2023），专注于分布式计算与数据工程",
            gallery_caption1: "实验室日常研讨",
            gallery_caption2: "国际会议学术交流",
            gallery_caption3: "年度团建活动",
            gallery_caption4: "团队协作讨论",
            gallery_click_hint: "（点击放大）",
            photo1: "实验室日常研讨",
            photo2: "国际会议学术交流",
            photo3: "年度团建活动",
            click_enlarge: "（点击放大）",
            details: "点击详情",
            skills: "专业技能",
            education: "教育背景"
        },
        cards: {
            background_title: "AI特色：自主化、模块化、自动化、批量化",
            background_desc: "研发的\"AI肿瘤免疫药物自主设计平台\"深度整合了生命科学领域知识和最前沿的生成式AI技术。",
            background_expand: "点击展开",
            background_collapse: "点击收起",
            background_ch1_title: "自主化",
            background_ch1_text: "在市场层面部署情报感知Agent集群，实时汇聚全球文献、临床试验、专利及市场动态，自主化收集最新、热门的靶点情报与药物市场动态。能够根据实际需求，自主调研、分析，并最终确定药物设计的目标靶点；进而从庞大的蛋白分子空间中进行精准而高效的条件采样。",
            background_ch2_title: "模块化",
            background_ch2_text: "打破现有AI工具的孤岛状态，贯穿\"情报整合-科学推演-风险权衡\"的智能体级协同，将药物信息关键输入全面融入各模块AI工具的决策链条，以完全模拟医药领域专家对\"靶点生物学合理性、竞争窗口期、临床转化风险\"的深度权衡。",
            background_ch3_title: "自动化",
            background_ch3_text: "情报层自动生成结构化报告，可将数字实验室输出自动转化为CRO可执行协议，实现自动化智能化的实验过程控制，降低因并发实验导致的反馈迟滞风险，大幅提升实验效率；通过轻量级API对接合作CRO，可将实验结果经结构化解析后反哺数字实验室模型微调，实现干实验推演--湿实验验证--反馈机制--干实验微调的自动化运行、自动化验证。",
            background_ch4_title: "批量化",
            background_ch4_text: "AI药物设计不再局限于\"热门靶点陷阱\"，可推广至其他靶点，同时并行多靶点运算设计，完全有能力将单管线验证能力系统性扩展为可复用、可迭代的AI自主立项平台。其他智能层信息也可批量应用至产业端信息赋能。",
            research_title: "四大智能层协同驱动",
            research_desc: "构建全链路智能化药物研发体系，从市场洞察到实验验证形成完整闭环。",
            research_ch1_title: "临床市场价值层",
            research_ch1_text: "构建动态情报中枢，实时汇聚全球临床需求、真实世界证据、竞争管线、专利地图与支付政策，通过多源异构数据融合生成高置信度市场洞察与立项方向。",
            research_ch2_title: "AI科学家层",
            research_ch2_text: "内嵌药物研发知识图谱与决策逻辑链，模拟顶尖科学家思维，对靶点生物学合理性、差异化路径、风险矩阵进行深度推演与优先级决策。",
            research_ch3_title: "数字实验室层",
            research_ch3_text: "集成生成式分子设计、靶点-配体相互作用模拟、ADMET预测等AI模型，完成高通量干实验筛选与优化。",
            research_ch4_title: "CRO实验智能管理层",
            research_ch4_text: "自主规划湿实验方案、智能调度外部CRO资源、实时监控实验进程，并将关键验证数据（如结合活性、细胞活性）精准反哺数字实验室，驱动模型迭代，形成\"情报输入—干实验筛选—湿实验验证—知识进化\"的干湿闭环。",
            content_title: "超越药物与AI--平台超强赋能",
            content_desc: "AI赋能，超越简单的药物分子设计，对简单的\"云平台\"思维说No。四大智能层提供全链路全层级的支持。",
            content_ch1_title: "对药物研发产业赋能",
            content_ch1_text: "平台将赋能药企（尤其中小型Biotech）突破专家资源瓶颈，实现立项决策标准化、智能化，推动行业从\"热门靶点内卷\"转向\"高价值蓝海探索\"，重塑创新生态。",
            content_ch2_title: "生命健康/创新药重大专项申请/市场需求梳理",
            content_ch2_text: "为生命健康领域和创新药研发提供重大专项申请支持，系统性梳理市场需求，助力项目立项与战略规划。",
            content_ch3_title: "创新药研发政策支持：CGT/IIT/CMC",
            content_ch3_text: "提供细胞与基因治疗(CGT)、研究者发起的临床试验(IIT)、化学制造与控制(CMC)等全方位政策支持与技术指导。",
            content_ch4_title: "智能药物靶点信息引擎",
            content_ch4_text: "构建智能化靶点信息检索与分析引擎，实时追踪全球靶点研究动态，为药物研发提供精准的靶点选择与验证支持。"
        },
        faq: {
            q1: "什么是PD1-IL2融合蛋白？",
            a1: "PD1-IL2融合蛋白是一种创新的肿瘤免疫治疗药物，将PD1抗体与IL2细胞因子融合，既能阻断肿瘤免疫逃逸，又能激活免疫细胞。IL2作为连接抗体与多肽的关键细胞因子，其研究将推动多种免疫治疗模式的发展。",
            q2: "平台的AI设计流程是怎样的？",
            a2: "平台采用模块化设计：临床信息层负责市场与靶点信息收集；AI立项层进行智能决策；数字实验室层进行序列设计与优化，通过多目标强化学习实现亲和力、稳定性等多维度优化；实验管理层实现干湿闭环反馈，持续提升预测准确性。",
            q3: "相比传统药物研发，AI平台有什么优势？",
            a3: "传统药物研发采用试错法，周期长成本高。我们的AI平台通过多目标优化，实现可表达性超过40%，受体结合命中率接近100%。平台具备数据冷启动能力，可在文献数据不足时自主生成训练数据。跨文献/机制/靶点的多层次建模支撑多路径探索，显著缩短研发周期，降低研发成本。",
            q4: "项目的应用前景如何？",
            a4: "项目聚焦PD1-IL2融合蛋白等肿瘤免疫药物，具备千亿规模市场潜力。平台技术高度可拓展，可快速迁移至抗体VHH、VL、VH设计与优化等领域。目前已获得4个不同活性IL2候选蛋白，初步具备PCC分子潜力，动物实验结果良好。平台的产业转化潜力显著，有望在肿瘤免疫治疗领域实现突破。"
        },
        news: {
            update1_date: "2026.01",
            update1_title: "PD1-IL2候选药物动物实验取得突破",
            update1_desc: "0042候选蛋白的MC38动物实验结果良好，表达纯化表现优异（瞬转表达量150-500mg/L，纯度超过90%），B16F10实验持续推进中。",
            update2_date: "2025.12",
            update2_title: "AI平台成功筛选出4个高潜力候选蛋白",
            update2_desc: "通过PBMC pSTAT5实验，从30余个符合开发标准的单体中成功筛选出0008、0042、0059、0085四个候选蛋白，初步具备PCC分子潜力。",
            papers_title: "期刊论文",
            papers_details_title: "论文详情：",
            papers_summary_title: "发表成果：",
            paper1_desc: "首次将多目标强化学习应用于肿瘤免疫药物设计，通过ZMutation算法实现亲和力、免疫原性、稳定性等多维度优化，受体结合命中率接近100%，可表达性超过40%。",
            paper2_desc: "提出基于LLM+Agent的数据冷启动流水线，实现收集-筛选-分析-预标注闭环，显著缩短数据构建周期，跨文献/机制/靶点覆盖提升泛化性与鲁棒性。",
            papers_summary: "累计发表SCI论文30余篇，其中Nature系列、Cell系列顶级期刊8篇，Drug Discovery Today等药物研发一区期刊12篇，谷歌学术总引用次数500+。",
            patents_title: "发明专利",
            patents_details_title: "专利详情：",
            patents_summary_title: "专利成果：",
            patent1_desc: "本发明公开了一种基于多目标强化学习的肿瘤免疫药物智能设计方法，通过ZMutation算法在突变规则、可合成性等约束下进行Pareto优化，实现亲和力、免疫原性、稳定性等多维度目标的可控权衡，受体结合命中率达98%以上。",
            patent2_desc: "本发明提出一种融合大语言模型与智能体的药物研发数据冷启动系统，实现收集-筛选-分析-预标注闭环，相比传统数据构建方法，周期缩短60%，人工成本降低70%，一致性显著提升。",
            patents_summary: "累计申请发明专利18项，已授权8项，其中国际PCT专利2项，核心技术已应用于多个药物研发项目。",
            award_title: "2025年度 AI与生物医药交叉创新奖",
            award_org: "授予单位：中国人工智能学会",
            award1_caption: "ICAIS Best Paper Award",
            award2_caption: "The AI Reviewer's Appraisal Award"
        },
        timeline: {
            t1_title: "平台启动",
            t1_desc: "组建AI+生物交叉团队，确立PD1-IL2研发路线",
            t2_title: "AI突破",
            t2_desc: "多目标优化算法验证成功，受体结合命中率近100%",
            t3_title: "生物验证",
            t3_desc: "成功表达40+条IL2单体，可表达性超40%",
            t4_title: "候选筛选",
            t4_desc: "筛选出4个候选蛋白，初步具备PCC分子潜力",
            t5_title: "动物实验",
            t5_desc: "0042候选蛋白MC38动物实验结果良好",
            t6_title: "临床转化",
            t6_desc: "推进IND申报，启动临床前研究"
        },
        recruit: {
            job1_title: "AI算法研究员",
            job1_desc: "负责电池寿命预测、故障诊断等核心算法的研究与复现。",
            job1_req1: "计算机、自动化或数学相关专业，硕士及以上学历；",
            job1_req2: "熟悉Python/C++，精通PyTorch/TensorFlow框架；",
            job1_req3: "有一作顶会论文者优先。",
            job2_title: "BMS硬件工程师",
            job2_desc: "负责BMS采集板、主控板的原理图设计与PCB Layout。",
            job2_req1: "电子工程相关专业，本科及以上学历；",
            job2_req2: "熟悉ARM/DSP架构，有车规级硬件开发经验者优先；",
            job2_req3: "熟练使用Altium Designer/Cadence。",
            job3_title: "嵌入式软件工程师",
            job3_desc: "负责BMS嵌入式软件开发，包括驱动程序、通信协议栈等。",
            job3_req1: "软件工程、计算机相关专业，本科及以上学历；",
            job3_req2: "精通C/C++，熟悉嵌入式开发流程；",
            job3_req3: "有AutoSAR、OSEK/VDX经验者优先。",
            responsibilities: "岗位职责：",
            requirements: "任职要求：",
            contact_desc: "请将简历发送至以下邮箱，邮件标题注明姓名+应聘职位",
            location: "办公地点：北京市海淀区中关村前沿技术大厦"
        },
        footer: {
            repo: "Gitee仓库",
            contact: "联系我们",
            copyright: "© 2026 智御 AI Drug Design Platform. All Rights Reserved."
        },
        interactive: {
            expand: "点击展开",
            collapse: "点击收起",
            details: "点击详情",
            close: "关闭"
        }
    },
    en: {
        nav: {
            home: "Home",
            team: "Team",
            news: "News",
            recruit: "Join Us"
        },
        hero: {
            index_title: "ImmunoSapienta",
            index_subtitle: "AI-driven Tumor Immunotherapy Drug Design Platform",
            index_description: "AI Autonomous Drug Design Platform: Beyond Platform Paradigm Redefinition",
            learn_more: "Learn More",
            team_title: "World-Class Research Team",
            team_subtitle: "Gathering interdisciplinary elites to tackle the ultimate challenges in energy.",
            news_title: "Project Updates & Achievements",
            news_subtitle: "Documenting every breakthrough and innovation.",
            recruit_title: "Looking for World-Changers",
            recruit_subtitle: "Open positions: Inviting young talents passionate about renewable energy and AI to join us."
        },
        sections: {
            intro: "Project Introduction",
            faq: "Frequently Asked Questions",
            leader: "Project Leader",
            members: "Core Members",
            mentors: "Project Mentors",
            students: "Project Students",
            gallery: "Team Gallery",
            updates: "Latest Updates",
            papers: "Papers & Patents",
            timeline: "Project Timeline",
            awards: "Awards & Honors",
            positions: "Open Positions",
            contact: "Contact Information"
        },
        cards: {
            background_title: "AI Features: Autonomy, Modularity, Automation, Scalability",
            background_desc: "The developed 'AI Tumor Immunotherapy Drug Autonomous Design Platform' deeply integrates life science domain knowledge with cutting-edge generative AI technology.",
            background_expand: "Click to Expand",
            background_collapse: "Click to Collapse",
            background_ch1_title: "Autonomy",
            background_ch1_text: "Deploy intelligence-sensing Agent clusters at the market level to aggregate global literature, clinical trials, patents, and market dynamics in real-time, autonomously collecting the latest and trending target intelligence and drug market dynamics. Capable of autonomously researching, analyzing, and ultimately determining target selection for drug design based on actual needs, then performing precise and efficient conditional sampling from the vast protein molecular space.",
            background_ch2_title: "Modularity",
            background_ch2_text: "Break the siloed state of existing AI tools, spanning 'intelligence integration - scientific reasoning - risk trade-off' agent-level collaboration, fully integrating key drug information inputs into the decision chains of each module's AI tools to completely simulate pharmaceutical domain experts' deep trade-offs on 'target biological rationality, competitive window period, and clinical translation risk'.",
            background_ch3_title: "Automation",
            background_ch3_text: "Intelligence layer automatically generates structured reports, can automatically convert digital laboratory outputs into CRO-executable protocols, achieving automated and intelligent experimental process control, reducing feedback delay risks caused by concurrent experiments, and significantly improving experimental efficiency. Through lightweight API integration with partner CROs, experimental results can be parsed and fed back to digital laboratory model fine-tuning, achieving automated operation and validation of dry experiment reasoning - wet experiment validation - feedback mechanism - dry experiment fine-tuning.",
            background_ch4_title: "Scalability",
            background_ch4_text: "AI drug design is no longer limited to the 'hot target trap', can be extended to other targets, simultaneously running parallel multi-target computational design, fully capable of systematically expanding single-pipeline validation capabilities into a reusable, iterative AI autonomous project initiation platform. Other intelligent layer information can also be applied in batches to industrial-side information empowerment.",
            research_title: "Four Intelligent Layers Collaborative Drive",
            research_desc: "Building a full-chain intelligent drug R&D system, forming a complete closed loop from market insights to experimental validation.",
            research_ch1_title: "Clinical Market Value Layer",
            research_ch1_text: "Construct a dynamic intelligence hub, aggregating global clinical needs, real-world evidence, competitive pipelines, patent maps, and payment policies in real-time. Generate high-confidence market insights and project initiation directions through multi-source heterogeneous data fusion.",
            research_ch2_title: "AI Scientist Layer",
            research_ch2_text: "Embed drug R&D knowledge graphs and decision logic chains, simulate top scientist thinking, conduct deep reasoning and priority decision-making on target biological rationality, differentiation pathways, and risk matrices.",
            research_ch3_title: "Digital Laboratory Layer",
            research_ch3_text: "Integrate generative molecular design, target-ligand interaction simulation, ADMET prediction and other AI models to complete high-throughput dry experiment screening and optimization.",
            research_ch4_title: "CRO Experiment Intelligent Management Layer",
            research_ch4_text: "Autonomously plan wet experiment protocols, intelligently schedule external CRO resources, monitor experimental progress in real-time, and precisely feed back key validation data (such as binding activity, cellular activity) to the digital laboratory, driving model iteration and forming a 'intelligence input - dry experiment screening - wet experiment validation - knowledge evolution' dry-wet closed loop.",
            content_title: "Beyond Drugs & AI -- Platform Super Empowerment",
            content_desc: "AI empowerment, beyond simple drug molecule design, saying No to simple 'cloud platform' thinking. Four intelligent layers provide full-chain, full-level support.",
            content_ch1_title: "Empowerment for Drug R&D Industry",
            content_ch1_text: "The platform will empower pharmaceutical companies (especially small and medium-sized Biotechs) to break through expert resource bottlenecks, achieve standardized and intelligent project initiation decisions, promote the industry from 'hot target involution' to 'high-value blue ocean exploration', and reshape the innovation ecosystem.",
            content_ch2_title: "Life & Health / Innovative Drug Major Project Application / Market Demand Analysis",
            content_ch2_text: "Provide major project application support for life and health fields and innovative drug R&D, systematically analyze market demands, and assist project initiation and strategic planning.",
            content_ch3_title: "Innovative Drug R&D Policy Support: CGT / IIT / CMC",
            content_ch3_text: "Provide comprehensive policy support and technical guidance for Cell and Gene Therapy (CGT), Investigator-Initiated Trials (IIT), Chemistry, Manufacturing and Controls (CMC), etc.",
            content_ch4_title: "Intelligent Drug Target Information Engine",
            content_ch4_text: "Build an intelligent target information retrieval and analysis engine, track global target research dynamics in real-time, and provide precise target selection and validation support for drug R&D."
        },
        faq: {
            q1: "What is PD1-IL2 fusion protein?",
            a1: "PD1-IL2 fusion protein is an innovative tumor immunotherapy drug that fuses PD1 antibody with IL2 cytokine, both blocking tumor immune escape and activating immune cells. IL2 as a key cytokine linking antibodies and peptides, its research will promote development of multiple immunotherapy modalities.",
            q2: "What is the AI design workflow of the platform?",
            a2: "Platform adopts modular design: Clinical information layer handles market and target information collection; AI project initiation layer makes intelligent decisions; Digital laboratory layer performs sequence design and optimization through multi-objective reinforcement learning for affinity, stability and other multi-dimensional optimization; Experiment management layer achieves wet-dry loop feedback to continuously improve prediction accuracy.",
            q3: "What advantages does the AI platform have over traditional drug R&D?",
            a3: "Traditional drug R&D uses trial-and-error approach with long cycles and high costs. Our AI platform through multi-objective optimization achieves expressibility over 40% and receptor binding hit rate close to 100%. Platform has data cold-start capability to autonomously generate training data when literature data is insufficient. Multi-level modeling across literature/mechanism/target supports multi-path exploration, significantly shortening R&D cycles and reducing costs.",
            q4: "What are the application prospects of this project?",
            a4: "Project focuses on PD1-IL2 fusion proteins and other tumor immunotherapy drugs with billion-scale market potential. Platform technology is highly scalable and can rapidly migrate to antibody VHH, VL, VH design and optimization. Currently obtained 4 IL2 candidate proteins with different activities, preliminarily possessing PCC molecule potential, with good animal experimental results. Platform has significant industrial translation potential with promise for breakthroughs in tumor immunotherapy field."
        },
        team: {
            leader_name: "Dr. Feng Yu",
            leader_role: "Project Leader / Zhongguancun Academy Advisor",
            leader_desc: "Completed PhD at Institute of Automation, Chinese Academy of Sciences, in collaboration with Microsoft Research Asia. Served as researcher at DP Technology, ByteDance, and Alibaba. Research interests include molecular modeling, recommendation systems, focusing on large-scale pre-training molecular search and generation, natural product metabolomics, molecular breeding, and data-knowledge agent development. Researcher at Zhongguancun Institute of Artificial Intelligence, focusing on scientific intelligence research. Led major projects in industrial intelligence, published 20+ papers with 4000+ citations.",
            mentor1_name: "Liang He",
            mentor1_role: "Senior Researcher, Zhongguancun Academy",
            mentor1_desc: "Bachelor's and PhD in Computer Science from University of Science and Technology of China. Research covers biological foundation models, computational biology, machine learning, graph data management and knowledge graphs.",
            mentor1_detail_title: "Research Background:",
            mentor1_detail: "Senior Researcher at Zhongguancun Academy, Bachelor's and PhD in Computer Science from University of Science and Technology of China. Former Senior Researcher at Microsoft Research Asia and Microsoft Research AI for Science Center. Research covers biological foundation models, computational biology, machine learning, graph data management and knowledge graphs. Published multiple papers in top journals and conferences including Nature Machine Intelligence, Genome Biology, Briefings in Bioinformatics, IEEE Transaction on Big Data, VLDB, NeurIPS, KDD, ACL, SIGIR, RecSys. Co-author of 'Knowledge Graph: Concepts and Technologies' published by China Electronics Industry Press, core contributor to Microsoft open-source project Microsoft Graph Engine. Developed systems that provided real-time services for Microsoft Bing, Xbox and other global online products, and led development of strongly-typed RDF engine Stylus. Currently serves as reviewer for Nature Machine Intelligence and other journals.",
            mentor2_name: "Kuangqi Zhou",
            mentor2_role: "Advisor, Zhongguancun Academy",
            mentor2_desc: "PhD in Electrical and Computer Engineering from National University of Singapore. Led or participated in multiple scientific intelligence-related applications and open-source projects.",
            mentor2_detail_title: "Research Background:",
            mentor2_detail: "PhD in Electrical and Computer Engineering from National University of Singapore. Research focuses on scientific intelligence and reinforcement learning. Led or participated in multiple scientific intelligence-related applications and open-source projects. Published multiple papers at top machine learning conferences including ICML. Possesses extensive experience in academic research and applied algorithm research.",
            mentor3_name: "Baole Wei",
            mentor3_role: "Advisor, Zhongguancun Academy",
            mentor3_desc: "PhD from Peking University Founders Research Institute. Research focuses on AI for Science, scientific agents, etc.",
            mentor3_detail_title: "Research Background:",
            mentor3_detail: "PhD from Peking University Founders Research Institute. Currently working at Zhongguancun Academy and Zhongguancun Institute of Artificial Intelligence. Research focuses on AI for Science, scientific agents, document analysis and understanding. Published 10+ papers at major international conferences including NeurIPS, AAAI, ICASSP. Holds 2 national invention patents and participates in National Key R&D Programs and National Natural Science Foundation projects.",
            mentor4_name: "Yongda Huang",
            mentor4_role: "Zhongguancun Academy Advisor",
            mentor4_desc: "PhD in Computational Materials Science from Beihang University, researching first-principles calculations and quantum Monte Carlo.",
            mentor4_detail_title: "Research Background:",
            mentor4_detail: "PhD in Computational Materials Science from Beihang University, postdoc at Slovak Academy of Sciences. Master's and doctoral research focused on first-principles calculations of lattice thermal conductivity and electrical conductivity based on density functional theory. Participated in one National Key R&D Program and holds one software copyright. During postdoctoral period at Slovak Academy of Sciences under EU Trex project, researched traditional and neural network quantum Monte Carlo methods and applications, participated in three EU projects. Published 8+ SCI papers as first/corresponding author.",
            mentor5_name: "Yongheng Li",
            mentor5_role: "Zhongguancun Academy Advisor",
            mentor5_desc: "PhD in Engineering, researching machine learning potentials and functional materials transport.",
            mentor5_detail_title: "Research Background:",
            mentor5_detail: "PhD in Engineering. Research focuses on machine learning potential development and computational methods for functional material transport. Core member of 2021 National Key R&D Program, responsible for inelastic scattering experiments and simulations. Published 10 SCI papers in past 5 years in Advanced Materials, Advanced Functional Materials, Nano Letters, Physical Review B and other authoritative journals.",
            mentor6_name: "Jiahui Liu",
            mentor6_role: "Zhongguancun Academy Advisor",
            mentor6_desc: "Researcher at Zhongguancun Institute of AI, researching AI+materials intelligent design and micro-mechanisms.",
            mentor6_detail_title: "Research Background:",
            mentor6_detail: "Researcher at Zhongguancun Institute of Artificial Intelligence. Research focuses on intelligent design and micro-mechanism investigation in AI+materials field, committed to building multiscale simulation frameworks integrating machine learning algorithms and physical constraints. Based on this framework, reveals micro-mechanisms such as irradiation damage, plastic deformation and defect evolution in complex material systems like high-entropy alloys. Further develops machine learning force field construction and property calculation platforms to promote intelligent design and discovery of new materials.",
            mentor7_name: "Ziheng Lu",
            mentor7_role: "Project Mentor",
            mentor7_desc: "Project Mentor",
            mentor7_detail_title: "Research Background:",
            mentor7_detail: "Information not available",
            mentor8_name: "Baole Wei",
            mentor8_role: "Zhongguancun Academy Advisor",
            mentor8_desc: "PhD from Peking University, researching AI for Science, scientific agents, etc.",
            mentor8_detail_title: "Research Background:",
            mentor8_detail: "PhD from Peking University Founders Research Institute. Currently working at Zhongguancun Academy and Zhongguancun Institute of Artificial Intelligence. Research focuses on AI for Science, scientific agents, document analysis and understanding. Published 10+ papers at NeurIPS, AAAI, ICASSP and other major international conferences. Holds 2 national invention patents and participates in national key R&D programs and NSFC projects.",
            mentor9_name: "Jian Wen",
            mentor9_role: "Zhongguancun Academy Advisor",
            mentor9_desc: "PhD from Kyoto University, researching multiphysics numerical simulation, HPC and AI surrogate models.",
            mentor9_detail_title: "Research Background:",
            mentor9_detail: "PhD from Kyoto University. Research focuses on multiphysics numerical simulation, high-performance computing and AI surrogate models. Deeply involved in domestic independent industrial simulation software kernel solver development, independently responsible for development of multiphysics modules including lithium batteries, fuel cells, and Lagrangian particle methods. Participated in electronic cooling module that achieved domestic replacement of foreign commercial software at Huawei and HiSilicon. CAE experience covers flow, heat transfer, radiation, multiphase flow, combustion, electrochemistry, particle methods, aeroacoustics, electronic cooling and other fields. Currently focusing on AI+new materials multiscale simulation modeling, committed to bridging the scale gap between microscopic material properties and macroscopic service performance.",
            student1_name: "Zihan Bian",
            student1_role: "Project Student",
            student1_desc: "Project Student",
            student1_detail_title: "Profile:",
            student1_detail: "Information not available",
            student2_name: "Anyi Li",
            student2_role: "Project Student",
            student2_desc: "PhD student at Gaoling School of AI, Renmin University, researching AI materials design.",
            student2_detail_title: "Profile:",
            student2_detail: "PhD student at Gaoling School of Artificial Intelligence, Renmin University of China. Research focuses on artificial intelligence materials design, specializing in model architecture research for complex systems such as liquid electrolytes. Published 5 CCF-A papers.",
            student3_name: "Dingyang Lyu",
            student3_role: "Project Student",
            student3_desc: "PhD student at CASIA, researching agent-based materials design.",
            student3_detail_title: "Profile:",
            student3_detail: "PhD student in Computer Application Technology at Institute of Automation, Chinese Academy of Sciences. Research focuses on agent-based materials design and fundamental materials characterization methods, dedicated to creating new paradigm for materials design in the AI era. Recipient of ICAIS 2025 Best Paper Award.",
            student4_name: "Qianyun Wu",
            student4_role: "Project Student",
            student4_desc: "Project Student",
            student4_detail_title: "Profile:",
            student4_detail: "Information not available",
            student5_name: "Fusheng Yin",
            student5_role: "Project Student",
            student5_desc: "PhD in Chemical Engineering from Tianjin University, researching solid electrolyte modification and AI+spectroscopy.",
            student5_detail_title: "Profile:",
            student5_detail: "PhD in Chemical Engineering from Tianjin University. Research focuses on modification and theoretical simulation of solid electrolytes, with important applications in solid electrolyte and electrocatalysis systems. Currently focusing on AI+spectroscopy cross-research direction, committed to combining machine learning with physicochemical mechanisms to improve efficiency of material structure and performance characterization and analysis. Published 10+ SCI papers.",
            student6_name: "Boyan Zhang",
            student6_role: "Project Student",
            student6_desc: "PhD student at UCAS in Control Science and Engineering, researching crystal structure design.",
            student6_detail_title: "Profile:",
            student6_detail: "PhD student at School of Interdisciplinary Sciences, University of Chinese Academy of Sciences, majoring in Control Science and Engineering. Research focuses on generative AI-based crystal structure design, specializing in generation of high ionic conductivity solid electrolyte structures. Committed to deeply integrating deep learning generative models with crystallographic principles, exploring data-driven paradigms for materials discovery.",
            member1_name: "Ming Li",
            member1_role: "Algorithm Engineer",
            member1_desc: "Focused on deep learning and time series prediction, responsible for SOC/SOH core algorithm development.",
            member1_skills_title: "Professional Skills:",
            member1_skills_1: "Deep Learning Frameworks: PyTorch, TensorFlow, Keras",
            member1_skills_2: "Time Series Prediction: LSTM, GRU, Transformer",
            member1_skills_3: "Battery Modeling: Thevenin model, Second-order RC equivalent circuit model",
            member1_skills_4: "Development Experience: Led SOC estimation module development, measured error <1.8%",
            member1_edu_title: "Education:",
            member1_edu: "Master in Automation, Tsinghua University (2023), research focus: ML applications in energy systems",
            member2_name: "Xiao Wang",
            member2_role: "Embedded Systems Expert",
            member2_desc: "Responsible for hardware architecture design and real-time OS optimization for edge computing nodes.",
            member2_skills_title: "Professional Skills:",
            member2_skills_1: "Hardware Platforms: ARM Cortex-M series, TI C2000 DSP, FPGA",
            member2_skills_2: "Real-time Systems: FreeRTOS, RT-Thread, Embedded Linux",
            member2_skills_3: "Communication Protocols: CAN, CAN FD, Ethernet, MQTT",
            member2_skills_4: "Design Achievement: Completed automotive-grade BMS acquisition board design, passed ISO 26262 functional safety certification",
            member2_edu_title: "Education:",
            member2_edu: "Master in Electronic Engineering, Beijing Institute of Technology (2022), focus: vehicular networking and embedded systems",
            member3_name: "Sarah Chen",
            member3_role: "Data Scientist",
            member3_desc: "Expert in big data mining and cloud platform construction, ensuring efficient processing of massive battery data.",
            member3_skills_title: "Professional Skills:",
            member3_skills_1: "Big Data Technologies: Spark, Flink, Kafka, Hadoop",
            member3_skills_2: "Cloud Platforms: AWS, Azure, Kubernetes, Docker",
            member3_skills_3: "Databases: TimescaleDB, InfluxDB, PostgreSQL",
            member3_skills_4: "System Architecture: Designed cloud platform supporting concurrent monitoring of millions of battery cells",
            member3_edu_title: "Education:",
            member3_edu: "Master in Computer Science, Stanford University (2023), focus: distributed computing and data engineering",
            gallery_caption1: "Laboratory Daily Discussion",
            gallery_caption2: "International Conference Academic Exchange",
            gallery_caption3: "Annual Team Building",
            gallery_caption4: "Team Collaboration Discussion",
            gallery_click_hint: "(Click to enlarge)",
            photo1: "Laboratory Daily Discussion",
            photo2: "International Conference Academic Exchange",
            photo3: "Annual Team Building",
            click_enlarge: "(Click to enlarge)",
            details: "Click for Details",
            skills: "Professional Skills",
            education: "Education"
        },
        news: {
            update1_date: "2026.01",
            update1_title: "PD1-IL2 Candidate Drug Animal Testing Breakthrough",
            update1_desc: "Candidate protein 0042 showed excellent MC38 animal experimental results with superior expression and purification (transient expression 150-500mg/L, purity >90%), B16F10 experiment ongoing.",
            update2_date: "2025.12",
            update2_title: "AI Platform Successfully Screened 4 High-Potential Candidate Proteins",
            update2_desc: "Through PBMC pSTAT5 experiments, successfully screened 4 candidate proteins (0008, 0042, 0059, 0085) from 30+ conforming monomers, preliminarily possessing PCC molecule potential.",
            papers_title: "Journal Papers",
            papers_details_title: "Paper Details:",
            papers_summary_title: "Publication Achievements:",
            paper1_desc: "First applied multi-objective reinforcement learning to tumor immunotherapy drug design. Through ZMutation algorithm achieved multi-dimensional optimization of affinity, immunogenicity, stability etc., receptor binding hit rate close to 100%, expressibility over 40%.",
            paper2_desc: "Proposed LLM+Agent based data cold-start pipeline, achieving collection-screening-analysis-pre-annotation closed loop, significantly shortening data construction cycle, cross-literature/mechanism/target coverage improving generalization and robustness.",
            papers_summary: "Published 30+ SCI papers, including 8 in Nature series and Cell series top journals, 12 in Drug Discovery Today and other drug R&D Q1 journals, with 500+ Google Scholar citations.",
            patents_title: "Invention Patents",
            patents_details_title: "Patent Details:",
            patents_summary_title: "Patent Achievements:",
            patent1_desc: "This invention discloses an intelligent design method for tumor immunotherapy drugs based on multi-objective reinforcement learning. Through ZMutation algorithm performs Pareto optimization under constraints of mutation rules and synthesizability, achieving controllable trade-offs of affinity, immunogenicity, stability and other multi-dimensional objectives, receptor binding hit rate over 98%.",
            patent2_desc: "This invention proposes a drug R&D data cold-start system integrating large language models and agents, achieving collection-screening-analysis-pre-annotation closed loop. Compared to traditional data construction methods, cycle shortened by 60%, labor cost reduced by 70%, consistency significantly improved.",
            patents_summary: "Applied for 18 invention patents, granted 8, including 2 international PCT patents. Core technologies applied to multiple drug R&D projects.",
            award_title: "2025 AI & Biomedicine Cross-Innovation Award",
            award_org: "Presented by: Chinese Association for Artificial Intelligence",
            award1_caption: "ICAIS Best Paper Award",
            award2_caption: "The AI Reviewer's Appraisal Award"
        },
        timeline: {
            t1_title: "Platform Launch",
            t1_desc: "Assembled AI+Biology interdisciplinary team, established PD1-IL2 R&D roadmap",
            t2_title: "AI Breakthrough",
            t2_desc: "Multi-objective optimization algorithm validated, receptor binding hit rate near 100%",
            t3_title: "Biological Validation",
            t3_desc: "Successfully expressed 40+ IL2 monomers, expressibility over 40%",
            t4_title: "Candidate Screening",
            t4_desc: "Screened 4 candidate proteins, preliminarily possessing PCC molecule potential",
            t5_title: "Animal Testing",
            t5_desc: "Candidate protein 0042 MC38 animal experiment showed good results",
            t6_title: "Clinical Translation",
            t6_desc: "Advancing IND filing, initiating preclinical research"
        },
        recruit: {
            job1_title: "AI Algorithm Researcher",
            job1_desc: "Responsible for research and implementation of core algorithms such as battery lifespan prediction and fault diagnosis.",
            job1_req1: "Master's degree or above in Computer Science, Automation, Mathematics or related fields;",
            job1_req2: "Proficient in Python/C++, expert in PyTorch/TensorFlow frameworks;",
            job1_req3: "First-author papers at top conferences preferred.",
            job2_title: "BMS Hardware Engineer",
            job2_desc: "Responsible for schematic design and PCB layout of BMS acquisition boards and main control boards.",
            job2_req1: "Bachelor's degree or above in Electronic Engineering or related fields;",
            job2_req2: "Familiar with ARM/DSP architectures, experience in automotive-grade hardware development preferred;",
            job2_req3: "Proficient in Altium Designer/Cadence.",
            job3_title: "Embedded Software Engineer",
            job3_desc: "Responsible for BMS embedded software development, including drivers, communication protocol stacks, etc.",
            job3_req1: "Bachelor's degree or above in Software Engineering, Computer Science or related fields;",
            job3_req2: "Proficient in C/C++, familiar with embedded development process;",
            job3_req3: "Experience with AutoSAR, OSEK/VDX preferred.",
            responsibilities: "Responsibilities:",
            requirements: "Requirements:",
            contact_desc: "Please send your resume to the following email with subject line: Name + Position",
            location: "Location: Zhongguancun Frontier Technology Building, Haidian District, Beijing"
        },
        footer: {
            repo: "Gitee Repository",
            contact: "Contact Us",
            copyright: "© 2026 ImmunoSapienta AI Drug Design Platform. All Rights Reserved."
        },
        interactive: {
            expand: "Click to Expand",
            collapse: "Click to Collapse",
            details: "Click for Details",
            close: "Close"
        }
    }
};

class I18n {
    constructor() {
        this.currentLang = this.getStoredLanguage() || this.detectLanguage() || 'zh';
        this.applyLanguage(this.currentLang);
    }

    getStoredLanguage() {
        return localStorage.getItem('lang');
    }

    detectLanguage() {
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        if (urlLang && (urlLang === 'zh' || urlLang === 'en')) {
            return urlLang;
        }

        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('zh')) {
            return 'zh';
        } else if (browserLang.startsWith('en')) {
            return 'en';
        }

        return 'zh';
    }

    saveLanguage(lang) {
        localStorage.setItem('lang', lang);
    }

    getTranslation(keyPath) {
        const keys = keyPath.split('.');
        let value = translations[this.currentLang];

        for (const key of keys) {
            if (value && value[key] !== undefined) {
                value = value[key];
            } else {
                return keyPath;
            }
        }

        return value;
    }

    applyLanguage(lang) {
        console.log('Applying language:', lang);
        this.currentLang = lang;
        this.saveLanguage(lang);

        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

        const elements = document.querySelectorAll('[data-i18n]');
        console.log('Translating elements:', elements.length);

        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);

            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });

        this.updateLanguageSwitcher();
        this.updateInteractiveBadges();
        this.updateAriaLabels();

        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    }

    switchLanguage(lang) {
        if (lang !== this.currentLang) {
            this.applyLanguage(lang);
        }
    }

    updateLanguageSwitcher() {
        const buttons = document.querySelectorAll('.lang-btn');
        buttons.forEach(btn => {
            const btnLang = btn.getAttribute('data-lang');
            if (btnLang === this.currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    updateInteractiveBadges() {
        const badges = document.querySelectorAll('.interactive-badge');
        badges.forEach(badge => {
            const parent = badge.closest('.expand-trigger');
            if (parent) {
                const isActive = parent.classList.contains('active');
                badge.textContent = isActive ?
                    translations[this.currentLang].interactive.collapse :
                    translations[this.currentLang].interactive.expand;
            }
        });
    }

    updateAriaLabels() {
        const hamburger = document.querySelector('.hamburger');
        if (hamburger) {
            const label = this.currentLang === 'zh' ? '切换导航' : 'Toggle navigation';
            hamburger.setAttribute('aria-label', label);
        }
    }

    getCurrentLanguage() {
        return this.currentLang;
    }
}

let i18n;
window.i18n = i18n;

function initI18n() {
    console.log('Initializing i18n...');
    i18n = new I18n();
    window.i18n = i18n;

    const langButtons = document.querySelectorAll('.lang-btn');
    console.log('Found language buttons:', langButtons.length);

    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.getAttribute('data-lang');
            console.log('Language button clicked:', lang);
            if (i18n) {
                i18n.switchLanguage(lang);
            }
        });

        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                btn.click();
            }
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
} else {
    initI18n();
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { I18n, translations };
}
