(function () {
  const media = {
    "classics.html": [
      ["s31", "robotic-welding.jpeg", "焊接自动化研究对象", "机器人焊接单元把轨迹、姿态、工艺参数和质量结果连接起来，是算法走向可执行工艺的典型入口。"],
      ["s31", "robotic-welding-shipbuilding.mp4", "船舶机器人焊接", "观察机器人在船舶构件上的定位、运动与连续焊接过程，可用于讨论轨迹规划和工艺闭环。", true],
      ["s32", "precision-laser-cut.jpeg", "精密切割与几何约束", "切割路径必须同时满足轮廓精度、热影响、穿孔次数和后续装配要求。"],
      ["s34", "cnc-plasma-shipyard-2.mp4", "船厂数控等离子切割", "实际切割过程体现了速度、穿孔、热输入与路径顺序之间的耦合关系。", true],
      ["s35", "automated-welding-trends.jpeg", "自动焊接的演进", "自动焊接正在从固定程序向感知、规划、执行和检测闭环演进。"],
      ["s41", "industry-5-human.jpeg", "人机协同制造", "在非标、多变的船舶场景中，工程师负责边界条件与例外，系统负责记录和复用经验。"],
      ["s42", "human-welding.mp4", "人工焊接工艺观察", "人工操作展示了姿态、速度和现场判断等隐性知识，也是自动焊接模型需要学习和结构化的内容。", true],
      ["s43", "fanuc-r2000.jpeg", "工业机器人平台", "成熟机器人平台提供运动学和安全能力，研究重点因而转向任务编排与工艺知识。"],
      ["s44", "six-axis-robot.jpeg", "多轴执行单元", "多轴执行机构可承担搬运、定位、打磨和焊接，但必须受工艺约束限定。"],
      ["s46", "welding-detail.jpeg", "焊缝质量数据", "焊缝外观、热输入和缺陷记录需要绑定零件、设备与工艺版本，才能用于训练。"],
      ["s47", "steel-frame-welding.jpeg", "结构件机器人焊接", "重复构件适合机器人作业，同时要求工装一致、定位可靠并可追踪质量。"]
    ],
    "shipyards.html": [
      ["s23", "ship-factory.jpeg", "钢材入库与船厂现场", "现场钢材、分段和物流对象必须与系统中的材料批次、位置和项目身份一致。"],
      ["s24", "marine-crane.jpeg", "大型船厂物流约束", "吊车、堆场和运输路径是套料与分段计划的隐含约束。"],
      ["s25", "cnc-plasma-shipyard.mp4", "船厂数控切割现场", "视频对应NC下发、设备状态采集、切割执行与后续分拣这一完整生产链。", true],
      ["s26", "tanker-craftsmanship.jpeg", "分段与船体建造", "分段建造汇聚大量切割件、型材、管路和舾装件，齐套率直接影响节点。"],
      ["s26", "shipyard-welding-workshop.mp4", "船厂焊接车间", "车间画面展示工位、人员、设备和在制品如何共同构成船舶焊接作业环境。", true],
      ["s27", "marine-fabrication-1.jpeg", "船体结构加工", "零件身份、方向、坡口和装配基准需要连续传递到现场。"],
      ["s27", "chinese-shipyard-welding.mp4", "中国船厂焊接作业", "现场焊接过程可用于识别人员、工位、质量与安全数据应如何进入制造闭环。", true],
      ["s31", "shipyard-production.jpeg", "船厂生产组织", "设计、采购、加工、分段和质量多链并行，软件需要维持共同的对象身份。"],
      ["s34", "scaffolding-fabrication.jpeg", "现场工装与作业条件", "脚手、工装和作业空间会影响安装顺序与可达性。"],
      ["s35", "pipe-fabrication.jpeg", "管段预制", "管段长度、焊口、法兰和托盘归属需要与分段计划同步。"],
      ["s45", "piping-fabrication.jpeg", "管系与舾装协同", "管系和舾装件的齐套管理是船厂由局部自动化走向流程协同的关键。"]
    ],
    "ai-manufacturing.html": [
      ["s11", "modern-factory.jpeg", "现代智能工厂", "智能工厂的物理基础是设备、物料、工艺、质量和物流均可识别、可连接、可追踪。"],
      ["s13", "digital-twin-roi.jpeg", "数字孪生的业务价值", "数字孪生必须连接设计模型、制造状态和实际结果，才能支持预测与决策。"],
      ["s22", "digital-ai-optimization.jpeg", "制造数据到优化建议", "AI从历史方案、设备实绩和质量结果中学习，输出仍需经过几何、工艺和安全校验。"],
      ["s24", "cnc-control-panel.mp4", "CNC控制面板与执行数据", "程序、报警、进给和设备状态是建立设备健康、工时和质量模型的直接数据源。", true],
      ["s32", "cnc-operator.jpeg", "人员、任务与设备关联", "操作者、程序版本和加工结果应绑定在同一任务记录中，形成完整事件链。"],
      ["s55", "human-control-cnc.mp4", "人工操作数控设备", "人工输入、确认和调整动作揭示了哪些知识尚未结构化，也为智能助手确定交互边界。", true],
      ["s56", "bosch-iot.jpeg", "工业IoT数据底座", "设备联网的价值在于把异常、计划、质量和维护决策放进同一业务链。"],
      ["s103", "piping-fabrication.jpeg", "管子制造数据", "管件几何、焊口、工艺、人员和检测结果共同决定返修与安装风险。"],
      ["s121", "automation-line.jpeg", "产线状态与控制塔", "产线视图需要呈现在制品、设备能力、物流位置和交付风险。"],
      ["s122", "industrial-factory-floor.mp4", "工业工厂现场与数字孪生", "真实工厂画面可用于理解数字孪生需要同步的设备、工件、人员和订单状态。", true],
      ["s131", "syntec-controller.jpeg", "数控系统与边缘层", "数控系统提供实时执行和状态接口，边缘节点负责协议适配、缓存与本地推理。"]
    ],
    "industry-agents.html": [
      ["section-4-1", "siemens-sinumerik-alarms.jpeg", "西门子数控系统入口", "程序、报警、轴状态和工艺参数是工业智能体进入制造闭环的重要入口。"],
      ["section-4-2", "fanuc-robot-display.jpeg", "FANUC机器人展示单元", "机器人本体、控制器和安全单元构成可被工业智能体编排的确定性执行基础。"],
      ["section-4-2", "fanuc-robot.mp4", "FANUC机器人运行", "工业智能体负责上层任务决策，实时运动、联锁和急停仍由机器人控制器执行。", true],
      ["section-4-3", "bosch-iot.jpeg", "博世工业IoT", "驱动、传感、自动化和工业软件的组合能力，有助于把设备数据转化为服务。"],
      ["section-4-4", "syntec-controller.jpeg", "国产控制器生态", "国产控制系统可依托本地设备和客户，通过开放接口积累行业工艺数据。"],
      ["section-4-5", "ddcs-controller.jpeg", "控制器与工具接口", "控制器厂商可把程序、报警、参数和工艺知识标准化为可信工具接口。"],
      ["section-8-1", "fanuc-robot-factory.jpeg", "机器人与设备入口", "华工需要把装备、控制器、工艺包和服务网络组合为智能层入口。"],
      ["section-11-1", "cnc-control-panel-2.mp4", "设备数据入口", "控制器状态可转化为任务、报警和实绩事件，是设备诊断与工艺智能体的基础。", true],
      ["section-11-2", "robotic-welding.jpeg", "质量识别智能体", "视觉、焊缝和过程参数共同构成质量证据，规则系统负责最终放行。"],
      ["section-12-2", "robotic-welding-shipbuilding-3.mp4", "船舶焊接智能体", "机器人焊接展示了从参数推荐、轨迹规划到执行反馈的完整智能体闭环。", true],
      ["section-13-4", "robot-cell.jpeg", "边缘运行平台", "边缘平台承载视觉推理、协议适配、缓存和本地安全策略。"]
    ]
  };

  function block(item) {
    const [anchor, file, title, caption, isVideo] = item;
    const figure = document.createElement("figure");
    figure.className = "media-block" + (isVideo ? " video-block" : "");
    const mediaEl = isVideo ? document.createElement("video") : document.createElement("img");
    mediaEl.src = "assets/ai-media/" + file;
    if (isVideo) {
      mediaEl.controls = true;
      mediaEl.preload = "metadata";
      mediaEl.playsInline = true;
      mediaEl.setAttribute("aria-label", title);
    } else {
      mediaEl.loading = "lazy";
      mediaEl.alt = title;
    }
    const figcaption = document.createElement("figcaption");
    figcaption.innerHTML = "<strong>现场参考 · " + title + "</strong>" + caption;
    figure.append(mediaEl, figcaption);
    return figure;
  }

  const page = location.pathname.split("/").pop() || "index.html";
  (media[page] || []).forEach((item) => {
    const heading = document.getElementById(item[0]);
    if (!heading || !heading.parentNode) return;
    let insertionPoint = heading.nextElementSibling;
    while (insertionPoint && !/^H[23]$/.test(insertionPoint.tagName) && insertionPoint.tagName !== "P") {
      insertionPoint = insertionPoint.nextElementSibling;
    }
    heading.parentNode.insertBefore(block(item), insertionPoint ? insertionPoint.nextSibling : heading.nextSibling);
  });
})();
