import{Y as d,a as W,c,Z as v,r as y,a1 as Un,a2 as Fn,$ as Ne,a3 as Ht,a4 as qt,i as mn}from"./index-DFlT4pcb.js";import{L,O as k,P as Z,G as P,c as T,V as j,v as R,s as E,a as de,E as Y,R as B,$ as ze,a0 as wn,Q as D,a1 as wt,a2 as je,C as oe,T as sn,X as jt,q as De,M as bn,D as yn,a3 as Vn}from"./core-DxWbNllR.js";import{c as x,U as re}from"./index-Dj6619mi.js";const Kn=L`
  :host {
    position: relative;
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-image='true']) {
    background-color: transparent;
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-size='sm']) {
    width: 32px;
    height: 32px;
  }

  :host([data-size='md']) {
    width: 40px;
    height: 40px;
  }

  :host([data-size='lg']) {
    width: 56px;
    height: 56px;
  }

  :host([name='Extension'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 32px;
    height: 32px;
  }

  wui-icon[data-parent-size='md'] {
    width: 40px;
    height: 40px;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: 1px;
  }
`;var xe=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let se=class extends W{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let t="1";return this.size==="lg"?t="4":this.size==="md"?t="2":this.size==="sm"&&(t="1"),this.style.cssText=`
       --local-border-radius: var(--apkt-borderRadius-${t});
   `,this.dataset.size=this.size,this.imageSrc&&(this.dataset.image="true"),this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),c`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?c`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?c`<wui-icon size="md" color="default" name=${this.walletIcon}></wui-icon>`:c`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};se.styles=[k,Kn];xe([d()],se.prototype,"size",void 0);xe([d()],se.prototype,"name",void 0);xe([d()],se.prototype,"imageSrc",void 0);xe([d()],se.prototype,"walletIcon",void 0);xe([d({type:Boolean})],se.prototype,"installed",void 0);xe([d()],se.prototype,"badgeSize",void 0);se=xe([x("wui-wallet-image")],se);const Hn=L`
  :host {
    position: relative;
    border-radius: ${({borderRadius:e})=>e[2]};
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]};
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: 2px;
  }
`;var $n=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};const At=4;let it=class extends W{constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<At;return c`${this.walletImages.slice(0,At).map(({src:i,walletName:r})=>c`
          <wui-wallet-image
            size="sm"
            imageSrc=${i}
            name=${v(r)}
          ></wui-wallet-image>
        `)}
    ${t?[...Array(At-this.walletImages.length)].map(()=>c` <wui-wallet-image size="sm" name=""></wui-wallet-image>`):null} `}};it.styles=[k,Hn];$n([d({type:Array})],it.prototype,"walletImages",void 0);it=$n([x("wui-all-wallets-image")],it);const qn=L`
  :host {
    width: 100%;
  }

  button {
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button > wui-wallet-image {
    background: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true']:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: ${({tokens:e})=>e.core.glass010};
    color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }
`;var F=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let z=class extends W{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return this.dataset.size=this.size,c`
      <button
        ?disabled=${this.disabled}
        data-all-wallets=${this.showAllWallets}
        tabindex=${v(this.tabIdx)}
      >
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="lg-regular" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?c` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?c` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?c`<wui-wallet-image
        size=${v(this.size==="sm"?"sm":"md")}
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?c`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.loading?c`<wui-loading-spinner size="lg" color="accent-primary"></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?c`<wui-tag size="sm" variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:null}};z.styles=[k,Z,qn];F([d({type:Array})],z.prototype,"walletImages",void 0);F([d()],z.prototype,"imageSrc",void 0);F([d()],z.prototype,"name",void 0);F([d()],z.prototype,"size",void 0);F([d()],z.prototype,"tagLabel",void 0);F([d()],z.prototype,"tagVariant",void 0);F([d()],z.prototype,"walletIcon",void 0);F([d()],z.prototype,"tabIdx",void 0);F([d({type:Boolean})],z.prototype,"disabled",void 0);F([d({type:Boolean})],z.prototype,"showAllWallets",void 0);F([d({type:Boolean})],z.prototype,"loading",void 0);F([d({type:String})],z.prototype,"loadingSpinnerColor",void 0);z=F([x("wui-list-wallet")],z);var Pe=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let pe=class extends W{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=P.state.connectors,this.count=T.state.count,this.filteredCount=T.state.filteredWallets.length,this.isFetchingRecommendedWallets=T.state.isFetchingRecommendedWallets,this.unsubscribe.push(P.subscribeKey("connectors",t=>this.connectors=t),T.subscribeKey("count",t=>this.count=t),T.subscribeKey("filteredWallets",t=>this.filteredCount=t.length),T.subscribeKey("isFetchingRecommendedWallets",t=>this.isFetchingRecommendedWallets=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.find(u=>u.id==="walletConnect"),{allWallets:i}=j.state;if(!t||i==="HIDE"||i==="ONLY_MOBILE"&&!R.isMobile())return null;const r=T.state.featured.length,o=this.count+r,n=o<10?o:Math.floor(o/10)*10,s=this.filteredCount>0?this.filteredCount:n;let a=`${s}`;this.filteredCount>0?a=`${this.filteredCount}`:s<o&&(a=`${s}+`);const l=E.hasAnyConnection(de.CONNECTOR_ID.WALLET_CONNECT);return c`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${a}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${v(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${l}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){Y.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),B.push("AllWallets")}};Pe([d()],pe.prototype,"tabIdx",void 0);Pe([y()],pe.prototype,"connectors",void 0);Pe([y()],pe.prototype,"count",void 0);Pe([y()],pe.prototype,"filteredCount",void 0);Pe([y()],pe.prototype,"isFetchingRecommendedWallets",void 0);pe=Pe([x("w3m-all-wallets-widget")],pe);var bt=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Me=class extends W{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=P.state.connectors,this.connections=E.state.connections,this.unsubscribe.push(P.subscribeKey("connectors",t=>this.connectors=t),E.subscribeKey("connections",t=>this.connections=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(i=>i.type==="ANNOUNCED");return t!=null&&t.length?c`
      <wui-flex flexDirection="column" gap="2">
        ${t.filter(ze.showConnector).map(i=>{const o=(this.connections.get(i.chain)??[]).some(n=>wn.isLowerCaseMatch(n.connectorId,i.id));return c`
            <wui-list-wallet
              imageSrc=${v(D.getConnectorImage(i))}
              name=${i.name??"Unknown"}
              @click=${()=>this.onConnector(i)}
              tagVariant=${o?"info":"success"}
              tagLabel=${o?"connected":"installed"}
              size="sm"
              data-testid=${`wallet-selector-${i.id}`}
              .installed=${!0}
              tabIdx=${v(this.tabIdx)}
            >
            </wui-list-wallet>
          `})}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){t.id==="walletConnect"?R.isMobile()?B.push("AllWallets"):B.push("ConnectingWalletConnect"):B.push("ConnectingExternal",{connector:t})}};bt([d()],Me.prototype,"tabIdx",void 0);bt([y()],Me.prototype,"connectors",void 0);bt([y()],Me.prototype,"connections",void 0);Me=bt([x("w3m-connect-announced-widget")],Me);var yt=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Ue=class extends W{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=P.state.connectors,this.loading=!1,this.unsubscribe.push(P.subscribeKey("connectors",t=>this.connectors=t)),R.isTelegram()&&R.isIos()&&(this.loading=!E.state.wcUri,this.unsubscribe.push(E.subscribeKey("wcUri",t=>this.loading=!t)))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{customWallets:t}=j.state;if(!(t!=null&&t.length))return this.style.cssText="display: none",null;const i=this.filterOutDuplicateWallets(t),r=E.hasAnyConnection(de.CONNECTOR_ID.WALLET_CONNECT);return c`<wui-flex flexDirection="column" gap="2">
      ${i.map(o=>c`
          <wui-list-wallet
            imageSrc=${v(D.getWalletImage(o))}
            name=${o.name??"Unknown"}
            @click=${()=>this.onConnectWallet(o)}
            size="sm"
            data-testid=${`wallet-selector-${o.id}`}
            tabIdx=${v(this.tabIdx)}
            ?loading=${this.loading}
            ?disabled=${r}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(t){const i=wt.getRecentWallets(),r=this.connectors.map(a=>{var l;return(l=a.info)==null?void 0:l.rdns}).filter(Boolean),o=i.map(a=>a.rdns).filter(Boolean),n=r.concat(o);if(n.includes("io.metamask.mobile")&&R.isMobile()){const a=n.indexOf("io.metamask.mobile");n[a]="io.metamask"}return t.filter(a=>!n.includes(String(a==null?void 0:a.rdns)))}onConnectWallet(t){this.loading||B.push("ConnectingWalletConnect",{wallet:t})}};yt([d()],Ue.prototype,"tabIdx",void 0);yt([y()],Ue.prototype,"connectors",void 0);yt([y()],Ue.prototype,"loading",void 0);Ue=yt([x("w3m-connect-custom-widget")],Ue);var Gt=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let ot=class extends W{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=P.state.connectors,this.unsubscribe.push(P.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const r=this.connectors.filter(n=>n.type==="EXTERNAL").filter(ze.showConnector).filter(n=>n.id!==de.CONNECTOR_ID.COINBASE_SDK);if(!(r!=null&&r.length))return this.style.cssText="display: none",null;const o=E.hasAnyConnection(de.CONNECTOR_ID.WALLET_CONNECT);return c`
      <wui-flex flexDirection="column" gap="2">
        ${r.map(n=>c`
            <wui-list-wallet
              imageSrc=${v(D.getConnectorImage(n))}
              .installed=${!0}
              name=${n.name??"Unknown"}
              data-testid=${`wallet-selector-external-${n.id}`}
              size="sm"
              @click=${()=>this.onConnector(n)}
              tabIdx=${v(this.tabIdx)}
              ?disabled=${o}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnector(t){B.push("ConnectingExternal",{connector:t})}};Gt([d()],ot.prototype,"tabIdx",void 0);Gt([y()],ot.prototype,"connectors",void 0);ot=Gt([x("w3m-connect-external-widget")],ot);var Yt=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let rt=class extends W{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){if(!this.wallets.length)return this.style.cssText="display: none",null;const t=E.hasAnyConnection(de.CONNECTOR_ID.WALLET_CONNECT);return c`
      <wui-flex flexDirection="column" gap="2">
        ${this.wallets.map(i=>c`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${i.id}`}
              imageSrc=${v(D.getWalletImage(i))}
              name=${i.name??"Unknown"}
              @click=${()=>this.onConnectWallet(i)}
              tabIdx=${v(this.tabIdx)}
              size="sm"
              ?disabled=${t}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(t){P.selectWalletConnector(t)}};Yt([d()],rt.prototype,"tabIdx",void 0);Yt([d()],rt.prototype,"wallets",void 0);rt=Yt([x("w3m-connect-featured-widget")],rt);var $t=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Fe=class extends W{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=[],this.connections=E.state.connections,this.unsubscribe.push(E.subscribeKey("connections",t=>this.connections=t))}render(){const t=this.connectors.filter(ze.showConnector);return t.length===0?(this.style.cssText="display: none",null):c`
      <wui-flex flexDirection="column" gap="2">
        ${t.map(i=>{const o=(this.connections.get(i.chain)??[]).some(n=>wn.isLowerCaseMatch(n.connectorId,i.id));return c`
            <wui-list-wallet
              imageSrc=${v(D.getConnectorImage(i))}
              .installed=${!0}
              name=${i.name??"Unknown"}
              tagVariant=${o?"info":"success"}
              tagLabel=${o?"connected":"installed"}
              data-testid=${`wallet-selector-${i.id}`}
              size="sm"
              @click=${()=>this.onConnector(i)}
              tabIdx=${v(this.tabIdx)}
            >
            </wui-list-wallet>
          `})}
      </wui-flex>
    `}onConnector(t){P.setActiveConnector(t),B.push("ConnectingExternal",{connector:t})}};$t([d()],Fe.prototype,"tabIdx",void 0);$t([d()],Fe.prototype,"connectors",void 0);$t([y()],Fe.prototype,"connections",void 0);Fe=$t([x("w3m-connect-injected-widget")],Fe);var Jt=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let st=class extends W{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=P.state.connectors,this.unsubscribe.push(P.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(i=>i.type==="MULTI_CHAIN"&&i.name!=="WalletConnect");return t!=null&&t.length?c`
      <wui-flex flexDirection="column" gap="2">
        ${t.map(i=>c`
            <wui-list-wallet
              imageSrc=${v(D.getConnectorImage(i))}
              .installed=${!0}
              name=${i.name??"Unknown"}
              tagVariant="info"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${i.id}`}
              size="sm"
              @click=${()=>this.onConnector(i)}
              tabIdx=${v(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){P.setActiveConnector(t),B.push("ConnectingMultiChain")}};Jt([d()],st.prototype,"tabIdx",void 0);Jt([y()],st.prototype,"connectors",void 0);st=Jt([x("w3m-connect-multi-chain-widget")],st);var vt=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Ve=class extends W{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=P.state.connectors,this.loading=!1,this.unsubscribe.push(P.subscribeKey("connectors",t=>this.connectors=t)),R.isTelegram()&&R.isIos()&&(this.loading=!E.state.wcUri,this.unsubscribe.push(E.subscribeKey("wcUri",t=>this.loading=!t)))}render(){const i=wt.getRecentWallets().filter(o=>!je.isExcluded(o)).filter(o=>!this.hasWalletConnector(o)).filter(o=>this.isWalletCompatibleWithCurrentChain(o));if(!i.length)return this.style.cssText="display: none",null;const r=E.hasAnyConnection(de.CONNECTOR_ID.WALLET_CONNECT);return c`
      <wui-flex flexDirection="column" gap="2">
        ${i.map(o=>c`
            <wui-list-wallet
              imageSrc=${v(D.getWalletImage(o))}
              name=${o.name??"Unknown"}
              @click=${()=>this.onConnectWallet(o)}
              tagLabel="recent"
              tagVariant="info"
              size="sm"
              tabIdx=${v(this.tabIdx)}
              ?loading=${this.loading}
              ?disabled=${r}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(t){this.loading||P.selectWalletConnector(t)}hasWalletConnector(t){return this.connectors.some(i=>i.id===t.id||i.name===t.name)}isWalletCompatibleWithCurrentChain(t){const i=oe.state.activeChain;return i&&t.chains?t.chains.some(r=>{const o=r.split(":")[0];return i===o}):!0}};vt([d()],Ve.prototype,"tabIdx",void 0);vt([y()],Ve.prototype,"connectors",void 0);vt([y()],Ve.prototype,"loading",void 0);Ve=vt([x("w3m-connect-recent-widget")],Ve);var xt=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Ke=class extends W{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,R.isTelegram()&&R.isIos()&&(this.loading=!E.state.wcUri,this.unsubscribe.push(E.subscribeKey("wcUri",t=>this.loading=!t)))}render(){const{connectors:t}=P.state,{customWallets:i,featuredWalletIds:r}=j.state,o=wt.getRecentWallets(),n=t.find(w=>w.id==="walletConnect"),a=t.filter(w=>w.type==="INJECTED"||w.type==="ANNOUNCED"||w.type==="MULTI_CHAIN").filter(w=>w.name!=="Browser Wallet");if(!n)return null;if(r||i||!this.wallets.length)return this.style.cssText="display: none",null;const l=a.length+o.length,u=Math.max(0,2-l),f=je.filterOutDuplicateWallets(this.wallets).slice(0,u);if(!f.length)return this.style.cssText="display: none",null;const S=E.hasAnyConnection(de.CONNECTOR_ID.WALLET_CONNECT);return c`
      <wui-flex flexDirection="column" gap="2">
        ${f.map(w=>c`
            <wui-list-wallet
              imageSrc=${v(D.getWalletImage(w))}
              name=${(w==null?void 0:w.name)??"Unknown"}
              @click=${()=>this.onConnectWallet(w)}
              size="sm"
              tabIdx=${v(this.tabIdx)}
              ?loading=${this.loading}
              ?disabled=${S}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(t){if(this.loading)return;const i=P.getConnector({id:t.id,rdns:t.rdns});i?B.push("ConnectingExternal",{connector:i}):B.push("ConnectingWalletConnect",{wallet:t})}};xt([d()],Ke.prototype,"tabIdx",void 0);xt([d()],Ke.prototype,"wallets",void 0);xt([y()],Ke.prototype,"loading",void 0);Ke=xt([x("w3m-connect-recommended-widget")],Ke);var Ct=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let He=class extends W{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=P.state.connectors,this.connectorImages=sn.state.connectorImages,this.unsubscribe.push(P.subscribeKey("connectors",t=>this.connectors=t),sn.subscribeKey("connectorImages",t=>this.connectorImages=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(R.isMobile())return this.style.cssText="display: none",null;const t=this.connectors.find(o=>o.id==="walletConnect");if(!t)return this.style.cssText="display: none",null;const i=t.imageUrl||this.connectorImages[(t==null?void 0:t.imageId)??""],r=E.hasAnyConnection(de.CONNECTOR_ID.WALLET_CONNECT);return c`
      <wui-list-wallet
        imageSrc=${v(i)}
        name=${t.name??"Unknown"}
        @click=${()=>this.onConnector(t)}
        tagLabel="qr code"
        tagVariant="accent"
        tabIdx=${v(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
        size="sm"
        ?disabled=${r}
      >
      </wui-list-wallet>
    `}onConnector(t){P.setActiveConnector(t),B.push("ConnectingWalletConnect")}};Ct([d()],He.prototype,"tabIdx",void 0);Ct([y()],He.prototype,"connectors",void 0);Ct([y()],He.prototype,"connectorImages",void 0);He=Ct([x("w3m-connect-walletconnect-widget")],He);const Gn=L`
  :host {
    margin-top: ${({spacing:e})=>e[1]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[2]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var Ge=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let ge=class extends W{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=P.state.connectors,this.recommended=T.state.recommended,this.featured=T.state.featured,this.unsubscribe.push(P.subscribeKey("connectors",t=>this.connectors=t),T.subscribeKey("recommended",t=>this.recommended=t),T.subscribeKey("featured",t=>this.featured=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return c`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){const{custom:t,recent:i,announced:r,injected:o,multiChain:n,recommended:s,featured:a,external:l}=ze.getConnectorsByType(this.connectors,this.recommended,this.featured);return ze.getConnectorTypeOrder({custom:t,recent:i,announced:r,injected:o,multiChain:n,recommended:s,featured:a,external:l}).map(f=>{switch(f){case"injected":return c`
            ${n.length?c`<w3m-connect-multi-chain-widget
                  tabIdx=${v(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${r.length?c`<w3m-connect-announced-widget
                  tabIdx=${v(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${o.length?c`<w3m-connect-injected-widget
                  .connectors=${o}
                  tabIdx=${v(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return c`<w3m-connect-walletconnect-widget
            tabIdx=${v(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return c`<w3m-connect-recent-widget
            tabIdx=${v(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return c`<w3m-connect-featured-widget
            .wallets=${a}
            tabIdx=${v(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return c`<w3m-connect-custom-widget
            tabIdx=${v(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return c`<w3m-connect-external-widget
            tabIdx=${v(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return c`<w3m-connect-recommended-widget
            .wallets=${s}
            tabIdx=${v(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${f}`),null}})}};ge.styles=Gn;Ge([d()],ge.prototype,"tabIdx",void 0);Ge([y()],ge.prototype,"connectors",void 0);Ge([y()],ge.prototype,"recommended",void 0);Ge([y()],ge.prototype,"featured",void 0);ge=Ge([x("w3m-connector-list")],ge);const Yn=L`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:e})=>e.theme.textPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:e})=>e.theme.textPrimary};
    }
  }
`;var Ye=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};const Jn={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},Qn={lg:"md",md:"sm",sm:"sm"};let me=class extends W{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return c`
      <button data-active=${this.active}>
        ${this.icon?c`<wui-icon size=${Qn[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${Jn[this.size]}> ${this.label} </wui-text>
      </button>
    `}};me.styles=[k,Z,Yn];Ye([d()],me.prototype,"icon",void 0);Ye([d()],me.prototype,"size",void 0);Ye([d()],me.prototype,"label",void 0);Ye([d({type:Boolean})],me.prototype,"active",void 0);me=Ye([x("wui-tab-item")],me);const Xn=L`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var Je=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let we=class extends W{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((t,i)=>{var o;const r=i===this.activeTab;return c`
        <wui-tab-item
          @click=${()=>this.onTabClick(i)}
          icon=${t.icon}
          size=${this.size}
          label=${t.label}
          ?active=${r}
          data-active=${r}
          data-testid="tab-${(o=t.label)==null?void 0:o.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(t){this.activeTab=t,this.onTabChange(t)}};we.styles=[k,Z,Xn];Je([d({type:Array})],we.prototype,"tabs",void 0);Je([d()],we.prototype,"onTabChange",void 0);Je([d()],we.prototype,"size",void 0);Je([y()],we.prototype,"activeTab",void 0);we=Je([x("wui-tabs")],we);var Qt=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let at=class extends W{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.generateTabs();return c`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${t} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const t=this.platforms.map(i=>i==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:i==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:i==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:i==="web"?{label:"Webapp",icon:"browser",platform:"web"}:i==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:i})=>i),t}onTabChange(t){var r;const i=this.platformTabs[t];i&&((r=this.onSelectPlatfrom)==null||r.call(this,i))}};Qt([d({type:Array})],at.prototype,"platforms",void 0);Qt([d()],at.prototype,"onSelectPlatfrom",void 0);at=Qt([x("w3m-connecting-header")],at);const Zn=L`
  :host {
    width: var(--local-width);
  }

  button {
    width: var(--local-width);
    white-space: nowrap;
    column-gap: ${({spacing:e})=>e[2]};
    transition:
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: scale, background-color, border-radius;
    cursor: pointer;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[2]};
    padding: 0 ${({spacing:e})=>e[2]};
    height: 28px;
  }

  button[data-size='md'] {
    border-radius: ${({borderRadius:e})=>e[3]};
    padding: 0 ${({spacing:e})=>e[4]};
    height: 38px;
  }

  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: 0 ${({spacing:e})=>e[5]};
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent-primary'] {
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='accent-secondary'] {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button[data-variant='neutral-primary'] {
    background-color: ${({tokens:e})=>e.theme.backgroundInvert};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='neutral-secondary'] {
    background-color: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='neutral-tertiary'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='error-primary'] {
    background-color: ${({tokens:e})=>e.core.textError};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='error-secondary'] {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  button[data-variant='shade'] {
    background: var(--wui-color-gray-glass-002);
    color: var(--wui-color-fg-200);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-size='sm']:focus-visible:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:focus-visible:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:focus-visible:enabled {
    border-radius: 48px;
  }
  button[data-variant='shade']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button[data-size='sm']:hover:enabled {
      border-radius: 28px;
    }

    button[data-size='md']:hover:enabled {
      border-radius: 38px;
    }

    button[data-size='lg']:hover:enabled {
      border-radius: 48px;
    }

    button[data-variant='shade']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='shade']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }
  }

  button[data-size='sm']:active:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:active:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:active:enabled {
    border-radius: 48px;
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    opacity: 0.3;
  }
`;var Ce=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};const ei={lg:"lg-regular-mono",md:"md-regular-mono",sm:"sm-regular-mono"},ti={lg:"md",md:"md",sm:"sm"};let ae=class extends W{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="accent-primary"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
     `;const t=this.textVariant??ei[this.size];return c`
      <button data-variant=${this.variant} data-size=${this.size} ?disabled=${this.disabled}>
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){if(this.loading){const t=ti[this.size],i=this.variant==="neutral-primary"||this.variant==="accent-primary"?"invert":"primary";return c`<wui-loading-spinner color=${i} size=${t}></wui-loading-spinner>`}return null}};ae.styles=[k,Z,Zn];Ce([d()],ae.prototype,"size",void 0);Ce([d({type:Boolean})],ae.prototype,"disabled",void 0);Ce([d({type:Boolean})],ae.prototype,"fullWidth",void 0);Ce([d({type:Boolean})],ae.prototype,"loading",void 0);Ce([d()],ae.prototype,"variant",void 0);Ce([d()],ae.prototype,"textVariant",void 0);ae=Ce([x("wui-button")],ae);const ni=L`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${e=>e.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var vn=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let lt=class extends W{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,r=36-t,o=116+r,n=245+r,s=360+r*1.75;return c`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${o} ${n}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};lt.styles=[k,ni];vn([d({type:Number})],lt.prototype,"radius",void 0);lt=vn([x("wui-loading-thumbnail")],lt);const ii=L`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding-left: ${({spacing:e})=>e[3]};
    padding-right: ${({spacing:e})=>e[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[6]};
  }

  wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var Et=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Ee=class extends W{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return c`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Ee.styles=[k,Z,ii];Et([d({type:Boolean})],Ee.prototype,"disabled",void 0);Et([d()],Ee.prototype,"label",void 0);Et([d()],Ee.prototype,"buttonLabel",void 0);Ee=Et([x("wui-cta-button")],Ee);const oi=L`
  :host {
    display: block;
    padding: 0 ${({spacing:e})=>e[5]} ${({spacing:e})=>e[5]};
  }
`;var xn=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let ct=class extends W{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:t,app_store:i,play_store:r,chrome_store:o,homepage:n}=this.wallet,s=R.isMobile(),a=R.isIos(),l=R.isAndroid(),u=[i,r,n,o].filter(Boolean).length>1,f=re.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return u&&!s?c`
        <wui-cta-button
          label=${`Don't have ${f}?`}
          buttonLabel="Get"
          @click=${()=>B.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!u&&n?c`
        <wui-cta-button
          label=${`Don't have ${f}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:i&&a?c`
        <wui-cta-button
          label=${`Don't have ${f}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&l?c`
        <wui-cta-button
          label=${`Don't have ${f}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&R.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&R.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&R.openHref(this.wallet.homepage,"_blank")}};ct.styles=[oi];xn([d({type:Object})],ct.prototype,"wallet",void 0);ct=xn([x("w3m-mobile-download-links")],ct);const ri=L`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({durations:e})=>e.lg};
    transition-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;var J=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};class N extends W{constructor(){var t,i,r,o,n;super(),this.wallet=(t=B.state.data)==null?void 0:t.wallet,this.connector=(i=B.state.data)==null?void 0:i.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=D.getWalletImage(this.wallet)??D.getConnectorImage(this.connector),this.name=((r=this.wallet)==null?void 0:r.name)??((o=this.connector)==null?void 0:o.name)??"Wallet",this.isRetrying=!1,this.uri=E.state.wcUri,this.error=E.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(E.subscribeKey("wcUri",s=>{var a;this.uri=s,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(a=this.onConnect)==null||a.call(this))}),E.subscribeKey("wcError",s=>this.error=s)),(R.isTelegram()||R.isSafari())&&R.isIos()&&E.state.wcUri&&((n=this.onConnect)==null||n.call(this))}firstUpdated(){var t;(t=this.onAutoConnect)==null||t.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),E.setWcError(!1),clearTimeout(this.timeout)}render(){var r;(r=this.onRender)==null||r.call(this),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let i="";return this.label?i=this.label:(i=`Continue in ${this.name}`,this.error&&(i="Connection declined")),c`
      <wui-flex
        data-error=${v(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${v(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${i}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${t}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?c`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?c`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){var t;if(this.error&&!this.showRetry){this.showRetry=!0;const i=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-button");i==null||i.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var t,i;E.setWcError(!1),this.onRetry?(this.isRetrying=!0,(t=this.onRetry)==null||t.call(this)):(i=this.onConnect)==null||i.call(this)}loaderTemplate(){const t=jt.state.themeVariables["--w3m-border-radius-master"],i=t?parseInt(t.replace("px",""),10):4;return c`<wui-loading-thumbnail radius=${i*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(R.copyToClopboard(this.uri),De.showSuccess("Link copied"))}catch{De.showError("Failed to copy")}}}N.styles=ri;J([y()],N.prototype,"isRetrying",void 0);J([y()],N.prototype,"uri",void 0);J([y()],N.prototype,"error",void 0);J([y()],N.prototype,"ready",void 0);J([y()],N.prototype,"showRetry",void 0);J([y()],N.prototype,"label",void 0);J([y()],N.prototype,"secondaryBtnLabel",void 0);J([y()],N.prototype,"secondaryLabel",void 0);J([y()],N.prototype,"isLoading",void 0);J([d({type:Boolean})],N.prototype,"isMobile",void 0);J([d()],N.prototype,"onRetry",void 0);var si=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let an=class extends N{constructor(){var t;if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),Y.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:(t=this.wallet)==null?void 0:t.display_index}})}async onConnectProxy(){var t;try{this.error=!1;const{connectors:i}=P.state,r=i.find(o=>{var n,s,a;return o.type==="ANNOUNCED"&&((n=o.info)==null?void 0:n.rdns)===((s=this.wallet)==null?void 0:s.rdns)||o.type==="INJECTED"||o.name===((a=this.wallet)==null?void 0:a.name)});if(r)await E.connectExternal(r,r.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");bn.close(),Y.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:((t=this.wallet)==null?void 0:t.name)||"Unknown"}})}catch(i){Y.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(i==null?void 0:i.message)??"Unknown"}}),this.error=!0}}};an=si([x("w3m-connecting-wc-browser")],an);var ai=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let ln=class extends N{constructor(){var t;if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),Y.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:(t=this.wallet)==null?void 0:t.display_index}})}onRenderProxy(){var t;!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:i,name:r}=this.wallet,{redirect:o,href:n}=R.formatNativeUrl(i,this.uri);E.setWcLinking({name:r,href:n}),E.setRecentWallet(this.wallet),R.openHref(o,"_blank")}catch{this.error=!0}}};ln=ai([x("w3m-connecting-wc-desktop")],ln);var Ae=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let be=class extends N{constructor(){var t;if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=j.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{var i;if((i=this.wallet)!=null&&i.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:r,link_mode:o,name:n}=this.wallet,{redirect:s,redirectUniversalLink:a,href:l}=R.formatNativeUrl(r,this.uri,o);this.redirectDeeplink=s,this.redirectUniversalLink=a,this.target=R.isIframe()?"_top":"_self",E.setWcLinking({name:n,href:l}),E.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?R.openHref(this.redirectUniversalLink,this.target):R.openHref(this.redirectDeeplink,this.target)}catch(r){Y.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:r instanceof Error?r.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=yn.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(E.subscribeKey("wcUri",()=>{this.onHandleURI()})),Y.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:(t=this.wallet)==null?void 0:t.display_index}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){var t;this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))}onTryAgain(){var t;E.setWcError(!1),(t=this.onConnect)==null||t.call(this)}};Ae([y()],be.prototype,"redirectDeeplink",void 0);Ae([y()],be.prototype,"redirectUniversalLink",void 0);Ae([y()],be.prototype,"target",void 0);Ae([y()],be.prototype,"preferUniversalLinks",void 0);Ae([y()],be.prototype,"isLoading",void 0);be=Ae([x("w3m-connecting-wc-mobile")],be);var Qe={},li=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Cn={},V={};let Xt;const ci=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];V.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};V.getSymbolTotalCodewords=function(t){return ci[t]};V.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};V.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');Xt=t};V.isKanjiModeEnabled=function(){return typeof Xt<"u"};V.toSJIS=function(t){return Xt(t)};var It={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,o){if(e.isValid(r))return r;try{return t(r)}catch{return o}}})(It);function En(){this.buffer=[],this.length=0}En.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var di=En;function Xe(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}Xe.prototype.set=function(e,t,i,r){const o=e*this.size+t;this.data[o]=i,r&&(this.reservedBit[o]=!0)};Xe.prototype.get=function(e,t){return this.data[e*this.size+t]};Xe.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i};Xe.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var ui=Xe,In={};(function(e){const t=V.getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];const o=Math.floor(r/7)+2,n=t(r),s=n===145?26:Math.ceil((n-13)/(2*o-2))*2,a=[n-7];for(let l=1;l<o-1;l++)a[l]=a[l-1]-s;return a.push(6),a.reverse()},e.getPositions=function(r){const o=[],n=e.getRowColCoords(r),s=n.length;for(let a=0;a<s;a++)for(let l=0;l<s;l++)a===0&&l===0||a===0&&l===s-1||a===s-1&&l===0||o.push([n[a],n[l]]);return o}})(In);var Rn={};const hi=V.getSymbolSize,cn=7;Rn.getPositions=function(t){const i=hi(t);return[[0,0],[i-cn,0],[0,i-cn]]};var Wn={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},e.from=function(o){return e.isValid(o)?parseInt(o,10):void 0},e.getPenaltyN1=function(o){const n=o.size;let s=0,a=0,l=0,u=null,f=null;for(let S=0;S<n;S++){a=l=0,u=f=null;for(let w=0;w<n;w++){let $=o.get(S,w);$===u?a++:(a>=5&&(s+=t.N1+(a-5)),u=$,a=1),$=o.get(w,S),$===f?l++:(l>=5&&(s+=t.N1+(l-5)),f=$,l=1)}a>=5&&(s+=t.N1+(a-5)),l>=5&&(s+=t.N1+(l-5))}return s},e.getPenaltyN2=function(o){const n=o.size;let s=0;for(let a=0;a<n-1;a++)for(let l=0;l<n-1;l++){const u=o.get(a,l)+o.get(a,l+1)+o.get(a+1,l)+o.get(a+1,l+1);(u===4||u===0)&&s++}return s*t.N2},e.getPenaltyN3=function(o){const n=o.size;let s=0,a=0,l=0;for(let u=0;u<n;u++){a=l=0;for(let f=0;f<n;f++)a=a<<1&2047|o.get(u,f),f>=10&&(a===1488||a===93)&&s++,l=l<<1&2047|o.get(f,u),f>=10&&(l===1488||l===93)&&s++}return s*t.N3},e.getPenaltyN4=function(o){let n=0;const s=o.data.length;for(let l=0;l<s;l++)n+=o.data[l];return Math.abs(Math.ceil(n*100/s/5)-10)*t.N4};function i(r,o,n){switch(r){case e.Patterns.PATTERN000:return(o+n)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(o+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return o*n%2+o*n%3===0;case e.Patterns.PATTERN110:return(o*n%2+o*n%3)%2===0;case e.Patterns.PATTERN111:return(o*n%3+(o+n)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(o,n){const s=n.size;for(let a=0;a<s;a++)for(let l=0;l<s;l++)n.isReserved(l,a)||n.xor(l,a,i(o,l,a))},e.getBestMask=function(o,n){const s=Object.keys(e.Patterns).length;let a=0,l=1/0;for(let u=0;u<s;u++){n(u),e.applyMask(u,o);const f=e.getPenaltyN1(o)+e.getPenaltyN2(o)+e.getPenaltyN3(o)+e.getPenaltyN4(o);e.applyMask(u,o),f<l&&(l=f,a=u)}return a}})(Wn);var Rt={};const ce=It,tt=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],nt=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Rt.getBlocksCount=function(t,i){switch(i){case ce.L:return tt[(t-1)*4+0];case ce.M:return tt[(t-1)*4+1];case ce.Q:return tt[(t-1)*4+2];case ce.H:return tt[(t-1)*4+3];default:return}};Rt.getTotalCodewordsCount=function(t,i){switch(i){case ce.L:return nt[(t-1)*4+0];case ce.M:return nt[(t-1)*4+1];case ce.Q:return nt[(t-1)*4+2];case ce.H:return nt[(t-1)*4+3];default:return}};var _n={},Wt={};const ke=new Uint8Array(512),dt=new Uint8Array(256);(function(){let t=1;for(let i=0;i<255;i++)ke[i]=t,dt[t]=i,t<<=1,t&256&&(t^=285);for(let i=255;i<512;i++)ke[i]=ke[i-255]})();Wt.log=function(t){if(t<1)throw new Error("log("+t+")");return dt[t]};Wt.exp=function(t){return ke[t]};Wt.mul=function(t,i){return t===0||i===0?0:ke[dt[t]+dt[i]]};(function(e){const t=Wt;e.mul=function(r,o){const n=new Uint8Array(r.length+o.length-1);for(let s=0;s<r.length;s++)for(let a=0;a<o.length;a++)n[s+a]^=t.mul(r[s],o[a]);return n},e.mod=function(r,o){let n=new Uint8Array(r);for(;n.length-o.length>=0;){const s=n[0];for(let l=0;l<o.length;l++)n[l]^=t.mul(o[l],s);let a=0;for(;a<n.length&&n[a]===0;)a++;n=n.slice(a)}return n},e.generateECPolynomial=function(r){let o=new Uint8Array([1]);for(let n=0;n<r;n++)o=e.mul(o,new Uint8Array([1,t.exp(n)]));return o}})(_n);const Sn=_n;function Zt(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}Zt.prototype.initialize=function(t){this.degree=t,this.genPoly=Sn.generateECPolynomial(this.degree)};Zt.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(t.length+this.degree);i.set(t);const r=Sn.mod(i,this.genPoly),o=this.degree-r.length;if(o>0){const n=new Uint8Array(this.degree);return n.set(r,o),n}return r};var fi=Zt,Tn={},he={},en={};en.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var ee={};const Pn="[0-9]+",pi="[A-Z $%*+\\-./:]+";let qe="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";qe=qe.replace(/u/g,"\\u");const gi="(?:(?![A-Z0-9 $%*+\\-./:]|"+qe+`)(?:.|[\r
]))+`;ee.KANJI=new RegExp(qe,"g");ee.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");ee.BYTE=new RegExp(gi,"g");ee.NUMERIC=new RegExp(Pn,"g");ee.ALPHANUMERIC=new RegExp(pi,"g");const mi=new RegExp("^"+qe+"$"),wi=new RegExp("^"+Pn+"$"),bi=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");ee.testKanji=function(t){return mi.test(t)};ee.testNumeric=function(t){return wi.test(t)};ee.testAlphanumeric=function(t){return bi.test(t)};(function(e){const t=en,i=ee;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(n,s){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?n.ccBits[0]:s<27?n.ccBits[1]:n.ccBits[2]},e.getBestModeForData=function(n){return i.testNumeric(n)?e.NUMERIC:i.testAlphanumeric(n)?e.ALPHANUMERIC:i.testKanji(n)?e.KANJI:e.BYTE},e.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},e.isValid=function(n){return n&&n.bit&&n.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+o)}}e.from=function(n,s){if(e.isValid(n))return n;try{return r(n)}catch{return s}}})(he);(function(e){const t=V,i=Rt,r=It,o=he,n=en,s=7973,a=t.getBCHDigit(s);function l(w,$,I){for(let b=1;b<=40;b++)if($<=e.getCapacity(b,I,w))return b}function u(w,$){return o.getCharCountIndicator(w,$)+4}function f(w,$){let I=0;return w.forEach(function(b){const C=u(b.mode,$);I+=C+b.getBitsLength()}),I}function S(w,$){for(let I=1;I<=40;I++)if(f(w,I)<=e.getCapacity(I,$,o.MIXED))return I}e.from=function($,I){return n.isValid($)?parseInt($,10):I},e.getCapacity=function($,I,b){if(!n.isValid($))throw new Error("Invalid QR Code version");typeof b>"u"&&(b=o.BYTE);const C=t.getSymbolTotalCodewords($),m=i.getTotalCodewordsCount($,I),p=(C-m)*8;if(b===o.MIXED)return p;const g=p-u(b,$);switch(b){case o.NUMERIC:return Math.floor(g/10*3);case o.ALPHANUMERIC:return Math.floor(g/11*2);case o.KANJI:return Math.floor(g/13);case o.BYTE:default:return Math.floor(g/8)}},e.getBestVersionForData=function($,I){let b;const C=r.from(I,r.M);if(Array.isArray($)){if($.length>1)return S($,C);if($.length===0)return 1;b=$[0]}else b=$;return l(b.mode,b.getLength(),C)},e.getEncodedBits=function($){if(!n.isValid($)||$<7)throw new Error("Invalid QR Code version");let I=$<<12;for(;t.getBCHDigit(I)-a>=0;)I^=s<<t.getBCHDigit(I)-a;return $<<12|I}})(Tn);var An={};const Dt=V,Ln=1335,yi=21522,dn=Dt.getBCHDigit(Ln);An.getEncodedBits=function(t,i){const r=t.bit<<3|i;let o=r<<10;for(;Dt.getBCHDigit(o)-dn>=0;)o^=Ln<<Dt.getBCHDigit(o)-dn;return(r<<10|o)^yi};var Bn={};const $i=he;function Ie(e){this.mode=$i.NUMERIC,this.data=e.toString()}Ie.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};Ie.prototype.getLength=function(){return this.data.length};Ie.prototype.getBitsLength=function(){return Ie.getBitsLength(this.data.length)};Ie.prototype.write=function(t){let i,r,o;for(i=0;i+3<=this.data.length;i+=3)r=this.data.substr(i,3),o=parseInt(r,10),t.put(o,10);const n=this.data.length-i;n>0&&(r=this.data.substr(i),o=parseInt(r,10),t.put(o,n*3+1))};var vi=Ie;const xi=he,Lt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Re(e){this.mode=xi.ALPHANUMERIC,this.data=e}Re.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};Re.prototype.getLength=function(){return this.data.length};Re.prototype.getBitsLength=function(){return Re.getBitsLength(this.data.length)};Re.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let r=Lt.indexOf(this.data[i])*45;r+=Lt.indexOf(this.data[i+1]),t.put(r,11)}this.data.length%2&&t.put(Lt.indexOf(this.data[i]),6)};var Ci=Re;const Ei=Un,Ii=he;function We(e){this.mode=Ii.BYTE,typeof e=="string"&&(e=Ei(e)),this.data=new Uint8Array(e)}We.getBitsLength=function(t){return t*8};We.prototype.getLength=function(){return this.data.length};We.prototype.getBitsLength=function(){return We.getBitsLength(this.data.length)};We.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)};var Ri=We;const Wi=he,_i=V;function _e(e){this.mode=Wi.KANJI,this.data=e}_e.getBitsLength=function(t){return t*13};_e.prototype.getLength=function(){return this.data.length};_e.prototype.getBitsLength=function(){return _e.getBitsLength(this.data.length)};_e.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=_i.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),e.put(i,13)}};var Si=_e;(function(e){const t=he,i=vi,r=Ci,o=Ri,n=Si,s=ee,a=V,l=Fn;function u(m){return unescape(encodeURIComponent(m)).length}function f(m,p,g){const h=[];let _;for(;(_=m.exec(g))!==null;)h.push({data:_[0],index:_.index,mode:p,length:_[0].length});return h}function S(m){const p=f(s.NUMERIC,t.NUMERIC,m),g=f(s.ALPHANUMERIC,t.ALPHANUMERIC,m);let h,_;return a.isKanjiModeEnabled()?(h=f(s.BYTE,t.BYTE,m),_=f(s.KANJI,t.KANJI,m)):(h=f(s.BYTE_KANJI,t.BYTE,m),_=[]),p.concat(g,h,_).sort(function(O,G){return O.index-G.index}).map(function(O){return{data:O.data,mode:O.mode,length:O.length}})}function w(m,p){switch(p){case t.NUMERIC:return i.getBitsLength(m);case t.ALPHANUMERIC:return r.getBitsLength(m);case t.KANJI:return n.getBitsLength(m);case t.BYTE:return o.getBitsLength(m)}}function $(m){return m.reduce(function(p,g){const h=p.length-1>=0?p[p.length-1]:null;return h&&h.mode===g.mode?(p[p.length-1].data+=g.data,p):(p.push(g),p)},[])}function I(m){const p=[];for(let g=0;g<m.length;g++){const h=m[g];switch(h.mode){case t.NUMERIC:p.push([h,{data:h.data,mode:t.ALPHANUMERIC,length:h.length},{data:h.data,mode:t.BYTE,length:h.length}]);break;case t.ALPHANUMERIC:p.push([h,{data:h.data,mode:t.BYTE,length:h.length}]);break;case t.KANJI:p.push([h,{data:h.data,mode:t.BYTE,length:u(h.data)}]);break;case t.BYTE:p.push([{data:h.data,mode:t.BYTE,length:u(h.data)}])}}return p}function b(m,p){const g={},h={start:{}};let _=["start"];for(let A=0;A<m.length;A++){const O=m[A],G=[];for(let le=0;le<O.length;le++){const Q=O[le],Oe=""+A+le;G.push(Oe),g[Oe]={node:Q,lastCount:0},h[Oe]={};for(let Pt=0;Pt<_.length;Pt++){const ne=_[Pt];g[ne]&&g[ne].node.mode===Q.mode?(h[ne][Oe]=w(g[ne].lastCount+Q.length,Q.mode)-w(g[ne].lastCount,Q.mode),g[ne].lastCount+=Q.length):(g[ne]&&(g[ne].lastCount=Q.length),h[ne][Oe]=w(Q.length,Q.mode)+4+t.getCharCountIndicator(Q.mode,p))}}_=G}for(let A=0;A<_.length;A++)h[_[A]].end=0;return{map:h,table:g}}function C(m,p){let g;const h=t.getBestModeForData(m);if(g=t.from(p,h),g!==t.BYTE&&g.bit<h.bit)throw new Error('"'+m+'" cannot be encoded with mode '+t.toString(g)+`.
 Suggested mode is: `+t.toString(h));switch(g===t.KANJI&&!a.isKanjiModeEnabled()&&(g=t.BYTE),g){case t.NUMERIC:return new i(m);case t.ALPHANUMERIC:return new r(m);case t.KANJI:return new n(m);case t.BYTE:return new o(m)}}e.fromArray=function(p){return p.reduce(function(g,h){return typeof h=="string"?g.push(C(h,null)):h.data&&g.push(C(h.data,h.mode)),g},[])},e.fromString=function(p,g){const h=S(p,a.isKanjiModeEnabled()),_=I(h),A=b(_,g),O=l.find_path(A.map,"start","end"),G=[];for(let le=1;le<O.length-1;le++)G.push(A.table[O[le]].node);return e.fromArray($(G))},e.rawSplit=function(p){return e.fromArray(S(p,a.isKanjiModeEnabled()))}})(Bn);const _t=V,Bt=It,Ti=di,Pi=ui,Ai=In,Li=Rn,Mt=Wn,Ut=Rt,Bi=fi,ut=Tn,Oi=An,Ni=he,Ot=Bn;function ki(e,t){const i=e.size,r=Li.getPositions(t);for(let o=0;o<r.length;o++){const n=r[o][0],s=r[o][1];for(let a=-1;a<=7;a++)if(!(n+a<=-1||i<=n+a))for(let l=-1;l<=7;l++)s+l<=-1||i<=s+l||(a>=0&&a<=6&&(l===0||l===6)||l>=0&&l<=6&&(a===0||a===6)||a>=2&&a<=4&&l>=2&&l<=4?e.set(n+a,s+l,!0,!0):e.set(n+a,s+l,!1,!0))}}function zi(e){const t=e.size;for(let i=8;i<t-8;i++){const r=i%2===0;e.set(i,6,r,!0),e.set(6,i,r,!0)}}function ji(e,t){const i=Ai.getPositions(t);for(let r=0;r<i.length;r++){const o=i[r][0],n=i[r][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?e.set(o+s,n+a,!0,!0):e.set(o+s,n+a,!1,!0)}}function Di(e,t){const i=e.size,r=ut.getEncodedBits(t);let o,n,s;for(let a=0;a<18;a++)o=Math.floor(a/3),n=a%3+i-8-3,s=(r>>a&1)===1,e.set(o,n,s,!0),e.set(n,o,s,!0)}function Nt(e,t,i){const r=e.size,o=Oi.getEncodedBits(t,i);let n,s;for(n=0;n<15;n++)s=(o>>n&1)===1,n<6?e.set(n,8,s,!0):n<8?e.set(n+1,8,s,!0):e.set(r-15+n,8,s,!0),n<8?e.set(8,r-n-1,s,!0):n<9?e.set(8,15-n-1+1,s,!0):e.set(8,15-n-1,s,!0);e.set(r-8,8,1,!0)}function Mi(e,t){const i=e.size;let r=-1,o=i-1,n=7,s=0;for(let a=i-1;a>0;a-=2)for(a===6&&a--;;){for(let l=0;l<2;l++)if(!e.isReserved(o,a-l)){let u=!1;s<t.length&&(u=(t[s]>>>n&1)===1),e.set(o,a-l,u),n--,n===-1&&(s++,n=7)}if(o+=r,o<0||i<=o){o-=r,r=-r;break}}}function Ui(e,t,i){const r=new Ti;i.forEach(function(l){r.put(l.mode.bit,4),r.put(l.getLength(),Ni.getCharCountIndicator(l.mode,e)),l.write(r)});const o=_t.getSymbolTotalCodewords(e),n=Ut.getTotalCodewordsCount(e,t),s=(o-n)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(s-r.getLengthInBits())/8;for(let l=0;l<a;l++)r.put(l%2?17:236,8);return Fi(r,e,t)}function Fi(e,t,i){const r=_t.getSymbolTotalCodewords(t),o=Ut.getTotalCodewordsCount(t,i),n=r-o,s=Ut.getBlocksCount(t,i),a=r%s,l=s-a,u=Math.floor(r/s),f=Math.floor(n/s),S=f+1,w=u-f,$=new Bi(w);let I=0;const b=new Array(s),C=new Array(s);let m=0;const p=new Uint8Array(e.buffer);for(let O=0;O<s;O++){const G=O<l?f:S;b[O]=p.slice(I,I+G),C[O]=$.encode(b[O]),I+=G,m=Math.max(m,G)}const g=new Uint8Array(r);let h=0,_,A;for(_=0;_<m;_++)for(A=0;A<s;A++)_<b[A].length&&(g[h++]=b[A][_]);for(_=0;_<w;_++)for(A=0;A<s;A++)g[h++]=C[A][_];return g}function Vi(e,t,i,r){let o;if(Array.isArray(e))o=Ot.fromArray(e);else if(typeof e=="string"){let u=t;if(!u){const f=Ot.rawSplit(e);u=ut.getBestVersionForData(f,i)}o=Ot.fromString(e,u||40)}else throw new Error("Invalid data");const n=ut.getBestVersionForData(o,i);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=n;else if(t<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const s=Ui(t,i,o),a=_t.getSymbolSize(t),l=new Pi(a);return ki(l,t),zi(l),ji(l,t),Nt(l,i,0),t>=7&&Di(l,t),Mi(l,s),isNaN(r)&&(r=Mt.getBestMask(l,Nt.bind(null,l,i))),Mt.applyMask(r,l),Nt(l,i,r),{modules:l,version:t,errorCorrectionLevel:i,maskPattern:r,segments:o}}Cn.create=function(t,i){if(typeof t>"u"||t==="")throw new Error("No input text");let r=Bt.M,o,n;return typeof i<"u"&&(r=Bt.from(i.errorCorrectionLevel,Bt.M),o=ut.from(i.version),n=Mt.from(i.maskPattern),i.toSJISFunc&&_t.setToSJISFunction(i.toSJISFunc)),Vi(t,o,r,n)};var On={},tn={};(function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let r=i.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+i);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(n){return[n,n]}))),r.length===6&&r.push("F","F");const o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});const o=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,n=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:n,scale:n?4:s,margin:o,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},e.getImageWidth=function(r,o){const n=e.getScale(r,o);return Math.floor((r+o.margin*2)*n)},e.qrToImageData=function(r,o,n){const s=o.modules.size,a=o.modules.data,l=e.getScale(s,n),u=Math.floor((s+n.margin*2)*l),f=n.margin*l,S=[n.color.light,n.color.dark];for(let w=0;w<u;w++)for(let $=0;$<u;$++){let I=(w*u+$)*4,b=n.color.light;if(w>=f&&$>=f&&w<u-f&&$<u-f){const C=Math.floor((w-f)/l),m=Math.floor(($-f)/l);b=S[a[C*s+m]?1:0]}r[I++]=b.r,r[I++]=b.g,r[I++]=b.b,r[I]=b.a}}})(tn);(function(e){const t=tn;function i(o,n,s){o.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(n,s,a){let l=a,u=s;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),s||(u=r()),l=t.getOptions(l);const f=t.getImageWidth(n.modules.size,l),S=u.getContext("2d"),w=S.createImageData(f,f);return t.qrToImageData(w.data,n,l),i(S,u,f),S.putImageData(w,0,0),u},e.renderToDataURL=function(n,s,a){let l=a;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),l||(l={});const u=e.render(n,s,l),f=l.type||"image/png",S=l.rendererOpts||{};return u.toDataURL(f,S.quality)}})(On);var Nn={};const Ki=tn;function un(e,t){const i=e.a/255,r=t+'="'+e.hex+'"';return i<1?r+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':r}function kt(e,t,i){let r=e+t;return typeof i<"u"&&(r+=" "+i),r}function Hi(e,t,i){let r="",o=0,n=!1,s=0;for(let a=0;a<e.length;a++){const l=Math.floor(a%t),u=Math.floor(a/t);!l&&!n&&(n=!0),e[a]?(s++,a>0&&l>0&&e[a-1]||(r+=n?kt("M",l+i,.5+u+i):kt("m",o,0),o=0,n=!1),l+1<t&&e[a+1]||(r+=kt("h",s),s=0)):o++}return r}Nn.render=function(t,i,r){const o=Ki.getOptions(i),n=t.modules.size,s=t.modules.data,a=n+o.margin*2,l=o.color.light.a?"<path "+un(o.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",u="<path "+un(o.color.dark,"stroke")+' d="'+Hi(s,n,o.margin)+'"/>',f='viewBox="0 0 '+a+" "+a+'"',w='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+f+' shape-rendering="crispEdges">'+l+u+`</svg>
`;return typeof r=="function"&&r(null,w),w};const qi=li,Ft=Cn,kn=On,Gi=Nn;function nn(e,t,i,r,o){const n=[].slice.call(arguments,1),s=n.length,a=typeof n[s-1]=="function";if(!a&&!qi())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(o=i,i=t,t=r=void 0):s===3&&(t.getContext&&typeof o>"u"?(o=r,r=void 0):(o=r,r=i,i=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(i=t,t=r=void 0):s===2&&!t.getContext&&(r=i,i=t,t=void 0),new Promise(function(l,u){try{const f=Ft.create(i,r);l(e(f,t,r))}catch(f){u(f)}})}try{const l=Ft.create(i,r);o(null,e(l,t,r))}catch(l){o(l)}}Qe.create=Ft.create;Qe.toCanvas=nn.bind(null,kn.render);Qe.toDataURL=nn.bind(null,kn.renderToDataURL);Qe.toString=nn.bind(null,function(e,t,i){return Gi.render(e,i)});const Yi=.1,hn=2.5,ie=7;function zt(e,t,i){return e===t?!1:(e-t<0?t-e:e-t)<=i+Yi}function Ji(e,t){const i=Array.prototype.slice.call(Qe.create(e,{errorCorrectionLevel:t}).modules.data,0),r=Math.sqrt(i.length);return i.reduce((o,n,s)=>(s%r===0?o.push([n]):o[o.length-1].push(n))&&o,[])}const Qi={generate({uri:e,size:t,logoSize:i,padding:r=8,dotColor:o="var(--apkt-tokens-theme-textInvert)"}){const s=[],a=Ji(e,"Q"),l=(t-2*r)/a.length,u=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];u.forEach(({x:b,y:C})=>{const m=(a.length-ie)*l*b+r,p=(a.length-ie)*l*C+r,g=.45;for(let h=0;h<u.length;h+=1){const _=l*(ie-h*2);s.push(Ne`
            <rect
              fill=${h===2?"var(--apkt-tokens-theme-textInvert)":"var(--apkt-tokens-theme-textPrimary)"}
              width=${h===0?_-10:_}
              rx= ${h===0?(_-10)*g:_*g}
              ry= ${h===0?(_-10)*g:_*g}
              stroke=${o}
              stroke-width=${h===0?10:0}
              height=${h===0?_-10:_}
              x= ${h===0?p+l*h+10/2:p+l*h}
              y= ${h===0?m+l*h+10/2:m+l*h}
            />
          `)}});const f=Math.floor((i+25)/l),S=a.length/2-f/2,w=a.length/2+f/2-1,$=[];a.forEach((b,C)=>{b.forEach((m,p)=>{if(a[C][p]&&!(C<ie&&p<ie||C>a.length-(ie+1)&&p<ie||C<ie&&p>a.length-(ie+1))&&!(C>S&&C<w&&p>S&&p<w)){const g=C*l+l/2+r,h=p*l+l/2+r;$.push([g,h])}})});const I={};return $.forEach(([b,C])=>{var m;I[b]?(m=I[b])==null||m.push(C):I[b]=[C]}),Object.entries(I).map(([b,C])=>{const m=C.filter(p=>C.every(g=>!zt(p,g,l)));return[Number(b),m]}).forEach(([b,C])=>{C.forEach(m=>{s.push(Ne`<circle cx=${b} cy=${m} fill=${o} r=${l/hn} />`)})}),Object.entries(I).filter(([b,C])=>C.length>1).map(([b,C])=>{const m=C.filter(p=>C.some(g=>zt(p,g,l)));return[Number(b),m]}).map(([b,C])=>{C.sort((p,g)=>p<g?-1:1);const m=[];for(const p of C){const g=m.find(h=>h.some(_=>zt(p,_,l)));g?g.push(p):m.push([p])}return[b,m.map(p=>[p[0],p[p.length-1]])]}).forEach(([b,C])=>{C.forEach(([m,p])=>{s.push(Ne`
              <line
                x1=${b}
                x2=${b}
                y1=${m}
                y2=${p}
                stroke=${o}
                stroke-width=${l/(hn/2)}
                stroke-linecap="round"
              />
            `)})}),s}},Xi=L`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({tokens:e})=>e.theme.backgroundInvert};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  :host {
    border-radius: ${({borderRadius:e})=>e[4]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;var fe=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let X=class extends W{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,c`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return Ne`
      <svg height=${this.size} width=${this.size}>
        ${Qi.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?c`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?c`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:c`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};X.styles=[k,Xi];fe([d()],X.prototype,"uri",void 0);fe([d({type:Number})],X.prototype,"size",void 0);fe([d()],X.prototype,"theme",void 0);fe([d()],X.prototype,"imageSrc",void 0);fe([d()],X.prototype,"alt",void 0);fe([d({type:Boolean})],X.prototype,"arenaClear",void 0);fe([d({type:Boolean})],X.prototype,"farcaster",void 0);X=fe([x("wui-qr-code")],X);const Zi=L`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:e})=>e.theme.foregroundSecondary} 0%,
      ${({tokens:e})=>e.theme.foregroundTertiary} 50%,
      ${({tokens:e})=>e.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;var Ze=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let ye=class extends W{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
    `,this.dataset.rounded=this.rounded?"true":"false",c`<slot></slot>`}};ye.styles=[Zi];Ze([d()],ye.prototype,"width",void 0);Ze([d()],ye.prototype,"height",void 0);Ze([d()],ye.prototype,"variant",void 0);Ze([d({type:Boolean})],ye.prototype,"rounded",void 0);ye=Ze([x("wui-shimmer")],ye);const eo=L`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var to=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Vt=class extends N{constructor(){var t,i;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),Y.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((t=this.wallet)==null?void 0:t.name)??"WalletConnect",platform:"qrcode",displayIndex:(i=this.wallet)==null?void 0:i.display_index}})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.unsubscribe)==null||t.forEach(i=>i()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.getBoundingClientRect().width-40,i=this.wallet?this.wallet.name:void 0;return E.setWcLinking(void 0),E.setRecentWallet(this.wallet),c` <wui-qr-code
      size=${t}
      theme=${jt.state.themeMode}
      uri=${this.uri}
      imageSrc=${v(D.getWalletImage(this.wallet))}
      color=${v(jt.state.themeVariables["--w3m-qr-color"])}
      alt=${v(i)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const t=!this.uri||!this.ready;return c`<wui-button
      .disabled=${t}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};Vt.styles=eo;Vt=to([x("w3m-connecting-wc-qrcode")],Vt);var no=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let fn=class extends W{constructor(){var t,i;if(super(),this.wallet=(t=B.state.data)==null?void 0:t.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");Y.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:(i=this.wallet)==null?void 0:i.display_index}})}render(){return c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${v(D.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};fn=no([x("w3m-connecting-wc-unsupported")],fn);var zn=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Kt=class extends N{constructor(){var t;if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=yn.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(E.subscribeKey("wcUri",()=>{this.updateLoadingState()})),Y.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:(t=this.wallet)==null?void 0:t.display_index}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:i,name:r}=this.wallet,{redirect:o,href:n}=R.formatUniversalUrl(i,this.uri);E.setWcLinking({name:r,href:n}),E.setRecentWallet(this.wallet),R.openHref(o,"_blank")}catch{this.error=!0}}};zn([y()],Kt.prototype,"isLoading",void 0);Kt=zn([x("w3m-connecting-wc-web")],Kt);var Le=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let $e=class extends W{constructor(){var t;super(),this.wallet=(t=B.state.data)==null?void 0:t.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!j.state.siwx,this.remoteFeatures=j.state.remoteFeatures,this.displayBranding=!0,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(j.subscribeKey("remoteFeatures",i=>this.remoteFeatures=i))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return c`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){var t;return!((t=this.remoteFeatures)!=null&&t.reownBranding)||!this.displayBranding?null:c`<wui-ux-by-reown></wui-ux-by-reown>`}async initializeConnection(t=!1){var i,r;if(!(this.platform==="browser"||j.state.manualWCControl&&!t))try{const{wcPairingExpiry:o,status:n}=E.state;if(t||j.state.enableEmbedded||R.isPairingExpired(o)||n==="connecting"){const s=E.getConnections(oe.state.activeChain),a=(i=this.remoteFeatures)==null?void 0:i.multiWallet,l=s.length>0;await E.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(l&&a?(B.replace("ProfileWallets"),De.showSuccess("New Wallet Added")):bn.close())}}catch(o){if(o instanceof Error&&o.message.includes("An error occurred when attempting to switch chain")&&!j.state.enableNetworkSwitch&&oe.state.activeChain){oe.setActiveCaipNetwork(Vn.getUnsupportedNetwork(`${oe.state.activeChain}:${(r=oe.state.activeCaipNetwork)==null?void 0:r.id}`)),oe.showUnsupportedChainUI();return}Y.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(o==null?void 0:o.message)??"Unknown"}}),E.setWcError(!0),De.showError(o.message??"Connection error"),E.resetWcConnection(),B.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;const{mobile_link:t,desktop_link:i,webapp_link:r,injected:o,rdns:n}=this.wallet,s=o==null?void 0:o.map(({injected_id:I})=>I).filter(Boolean),a=[...n?[n]:s??[]],l=j.state.isUniversalProvider?!1:a.length,u=t,f=r,S=E.checkInstalled(a),w=l&&S,$=i&&!R.isMobile();w&&!oe.state.noAdapters&&this.platforms.push("browser"),u&&this.platforms.push(R.isMobile()?"mobile":"qrcode"),f&&this.platforms.push("web"),$&&this.platforms.push("desktop"),!w&&l&&!oe.state.noAdapters&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return c`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return c`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return c`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return c`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return c`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return c`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?c`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){var r;const i=(r=this.shadowRoot)==null?void 0:r.querySelector("div");i&&(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Le([y()],$e.prototype,"platform",void 0);Le([y()],$e.prototype,"platforms",void 0);Le([y()],$e.prototype,"isSiwxEnabled",void 0);Le([y()],$e.prototype,"remoteFeatures",void 0);Le([d({type:Boolean})],$e.prototype,"displayBranding",void 0);$e=Le([x("w3m-connecting-wc-view")],$e);var on=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let ht=class extends W{constructor(){super(),this.unsubscribe=[],this.isMobile=R.isMobile(),this.remoteFeatures=j.state.remoteFeatures,this.unsubscribe.push(j.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(this.isMobile){const{featured:t,recommended:i}=T.state,{customWallets:r}=j.state,o=wt.getRecentWallets(),n=t.length||i.length||(r==null?void 0:r.length)||o.length;return c`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${n?c`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return c`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){var t;return(t=this.remoteFeatures)!=null&&t.reownBranding?c` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};on([y()],ht.prototype,"isMobile",void 0);on([y()],ht.prototype,"remoteFeatures",void 0);ht=on([x("w3m-connecting-wc-basic-view")],ht);const io=L`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({colors:e})=>e.neutrals300};
    border-radius: ${({borderRadius:e})=>e.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:e})=>e.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    background-color: ${({tokens:e})=>e.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:e})=>e.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:e})=>e.theme.textTertiary};
  }
`;var St=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Se=class extends W{constructor(){super(...arguments),this.inputElementRef=Ht(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return c`
      <label data-size=${this.size}>
        <input
          ${qt(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){var t;this.dispatchEvent(new CustomEvent("switchChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.checked,bubbles:!0,composed:!0}))}};Se.styles=[k,Z,io];St([d({type:Boolean})],Se.prototype,"checked",void 0);St([d({type:Boolean})],Se.prototype,"disabled",void 0);St([d()],Se.prototype,"size",void 0);Se=St([x("wui-toggle")],Se);const oo=L`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var jn=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let ft=class extends W{constructor(){super(...arguments),this.checked=!1}render(){return c`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(t){t.stopPropagation(),this.checked=t.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};ft.styles=[k,Z,oo];jn([d({type:Boolean})],ft.prototype,"checked",void 0);ft=jn([x("wui-certified-switch")],ft);const ro=L`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.textPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[3]} ${({spacing:e})=>e[10]};
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
  }

  input[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[4]} ${({spacing:e})=>e[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({spacing:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({borderRadius:e})=>e[2]};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({spacing:e})=>e[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;var H=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let M=class extends W{constructor(){super(...arguments),this.inputElementRef=Ht(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return c` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${qt(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${v(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?c`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){var t;return this.onSubmit?c`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${(t=this.onSubmit)==null?void 0:t.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?c`<wui-icon name="spinner" size="md"></wui-icon>`:c`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?c`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?c`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){var t;this.dispatchEvent(new CustomEvent("inputChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.value,bubbles:!0,composed:!0}))}};M.styles=[k,Z,ro];H([d()],M.prototype,"icon",void 0);H([d({type:Boolean})],M.prototype,"disabled",void 0);H([d({type:Boolean})],M.prototype,"loading",void 0);H([d()],M.prototype,"placeholder",void 0);H([d()],M.prototype,"type",void 0);H([d()],M.prototype,"value",void 0);H([d()],M.prototype,"errorText",void 0);H([d()],M.prototype,"warningText",void 0);H([d()],M.prototype,"onSubmit",void 0);H([d()],M.prototype,"size",void 0);H([d({attribute:!1})],M.prototype,"onKeyDown",void 0);M=H([x("wui-input-text")],M);const so=L`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:e})=>e[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }
`;var Dn=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let pt=class extends W{constructor(){super(...arguments),this.inputComponentRef=Ht(),this.inputValue=""}render(){return c`
      <wui-input-text
        ${qt(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?c`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(t){this.inputValue=t.detail||""}clearValue(){const t=this.inputComponentRef.value,i=t==null?void 0:t.inputElementRef.value;i&&(i.value="",this.inputValue="",i.focus(),i.dispatchEvent(new Event("input")))}};pt.styles=[k,so];Dn([d()],pt.prototype,"inputValue",void 0);pt=Dn([x("wui-search-bar")],pt);const ao=Ne`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,lo=L`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:e})=>e.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var Mn=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let gt=class extends W{constructor(){super(...arguments),this.type="wallet"}render(){return c`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?c` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${ao}`:c`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};gt.styles=[k,Z,lo];Mn([d()],gt.prototype,"type",void 0);gt=Mn([x("wui-card-select-loader")],gt);const co=mn`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var q=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let U=class extends W{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&re.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&re.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&re.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&re.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&re.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&re.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&re.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&re.getSpacingStyles(this.margin,3)};
    `,c`<slot></slot>`}};U.styles=[k,co];q([d()],U.prototype,"gridTemplateRows",void 0);q([d()],U.prototype,"gridTemplateColumns",void 0);q([d()],U.prototype,"justifyItems",void 0);q([d()],U.prototype,"alignItems",void 0);q([d()],U.prototype,"justifyContent",void 0);q([d()],U.prototype,"alignContent",void 0);q([d()],U.prototype,"columnGap",void 0);q([d()],U.prototype,"rowGap",void 0);q([d()],U.prototype,"gap",void 0);q([d()],U.prototype,"padding",void 0);q([d()],U.prototype,"margin",void 0);U=q([x("wui-grid")],U);const uo=L`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[0]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:e})=>e[4]}, 20px);
    transition:
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:e})=>e.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:e})=>e.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:e})=>e.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:e})=>e.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var et=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let ve=class extends W{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var i,r;const t=((i=this.wallet)==null?void 0:i.badge_type)==="certified";return c`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${v(t?"certified":void 0)}
            >${(r=this.wallet)==null?void 0:r.name}</wui-text
          >
          ${t?c`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){var t,i;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():c`
      <wui-wallet-image
        size="lg"
        imageSrc=${v(this.imageSrc)}
        name=${(t=this.wallet)==null?void 0:t.name}
        .installed=${(i=this.wallet)==null?void 0:i.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return c`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=D.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await D.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};ve.styles=uo;et([y()],ve.prototype,"visible",void 0);et([y()],ve.prototype,"imageSrc",void 0);et([y()],ve.prototype,"imageLoading",void 0);et([d()],ve.prototype,"wallet",void 0);ve=et([x("w3m-all-wallets-list-item")],ve);const ho=L`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({spacing:e})=>e[4]};
    padding-bottom: ${({spacing:e})=>e[4]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var Be=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};const pn="local-paginator";let ue=class extends W{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!T.state.wallets.length,this.wallets=T.state.wallets,this.recommended=T.state.recommended,this.featured=T.state.featured,this.filteredWallets=T.state.filteredWallets,this.unsubscribe.push(T.subscribeKey("wallets",t=>this.wallets=t),T.subscribeKey("recommended",t=>this.recommended=t),T.subscribeKey("featured",t=>this.featured=t),T.subscribeKey("filteredWallets",t=>this.filteredWallets=t))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var t;this.unsubscribe.forEach(i=>i()),(t=this.paginationObserver)==null||t.disconnect()}render(){return c`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var i;this.loading=!0;const t=(i=this.shadowRoot)==null?void 0:i.querySelector("wui-grid");t&&(await T.fetchWalletsByPage({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,i){return[...Array(t)].map(()=>c`
        <wui-card-select-loader type="wallet" id=${v(i)}></wui-card-select-loader>
      `)}getWallets(){var o;const t=[...this.featured,...this.recommended];((o=this.filteredWallets)==null?void 0:o.length)>0?t.push(...this.filteredWallets):t.push(...this.wallets);const i=R.uniqueBy(t,"id"),r=je.markWalletsAsInstalled(i);return je.markWalletsWithDisplayIndex(r)}walletsTemplate(){return this.getWallets().map(i=>c`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${i.id}"
          @click=${()=>this.onConnectWallet(i)}
          .wallet=${i}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:t,recommended:i,featured:r,count:o}=T.state,n=window.innerWidth<352?3:4,s=t.length+i.length;let l=Math.ceil(s/n)*n-s+n;return l-=t.length?r.length%n:0,o===0&&r.length>0?null:o===0||[...r,...t,...i].length<o?this.shimmerTemplate(l,pn):null}createPaginationObserver(){var i;const t=(i=this.shadowRoot)==null?void 0:i.querySelector(`#${pn}`);t&&(this.paginationObserver=new IntersectionObserver(([r])=>{if(r!=null&&r.isIntersecting&&!this.loading){const{page:o,count:n,wallets:s}=T.state;s.length<n&&T.fetchWalletsByPage({page:o+1})}}),this.paginationObserver.observe(t))}onConnectWallet(t){P.selectWalletConnector(t)}};ue.styles=ho;Be([y()],ue.prototype,"loading",void 0);Be([y()],ue.prototype,"wallets",void 0);Be([y()],ue.prototype,"recommended",void 0);Be([y()],ue.prototype,"featured",void 0);Be([y()],ue.prototype,"filteredWallets",void 0);ue=Be([x("w3m-all-wallets-list")],ue);const fo=mn`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var Tt=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Te=class extends W{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?c`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await T.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:t}=T.state,i=je.markWalletsAsInstalled(t);return t.length?c`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${i.map(r=>c`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(r)}
              .wallet=${r}
              data-testid="wallet-search-item-${r.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:c`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(t){P.selectWalletConnector(t)}};Te.styles=fo;Tt([y()],Te.prototype,"loading",void 0);Tt([d()],Te.prototype,"query",void 0);Tt([d()],Te.prototype,"badge",void 0);Te=Tt([x("w3m-all-wallets-search")],Te);var rn=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let mt=class extends W{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=R.debounce(t=>{this.search=t})}render(){const t=this.search.length>=2;return c`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge==="certified"}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t||this.badge?c`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:c`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}onCertifiedSwitchChange(t){t.detail?(this.badge="certified",De.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return R.isMobile()?c`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){B.push("ConnectingWalletConnect")}};rn([y()],mt.prototype,"search",void 0);rn([y()],mt.prototype,"badge",void 0);mt=rn([x("w3m-all-wallets-view")],mt);const po=L`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var te=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let K=class extends W{constructor(){super(...arguments),this.imageSrc="google",this.loading=!1,this.disabled=!1,this.rightIcon=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",c`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        tabindex=${v(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?c`<wui-image
        icon=${this.icon}
        iconColor=${v(this.iconColor)}
        ?boxed=${!0}
        ?rounded=${this.rounded}
      ></wui-image>`:c`<wui-image
      ?boxed=${!0}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      src=${this.imageSrc}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?c`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:c`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};K.styles=[k,Z,po];te([d()],K.prototype,"imageSrc",void 0);te([d()],K.prototype,"icon",void 0);te([d()],K.prototype,"iconColor",void 0);te([d({type:Boolean})],K.prototype,"loading",void 0);te([d()],K.prototype,"tabIdx",void 0);te([d({type:Boolean})],K.prototype,"disabled",void 0);te([d({type:Boolean})],K.prototype,"rightIcon",void 0);te([d({type:Boolean})],K.prototype,"rounded",void 0);te([d({type:Boolean})],K.prototype,"fullSize",void 0);K=te([x("wui-list-item")],K);var go=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let gn=class extends W{constructor(){var t;super(...arguments),this.wallet=(t=B.state.data)==null?void 0:t.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return c`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var t;return(t=this.wallet)!=null&&t.chrome_store?c`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var t;return(t=this.wallet)!=null&&t.app_store?c`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var t;return(t=this.wallet)!=null&&t.play_store?c`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var t;return(t=this.wallet)!=null&&t.homepage?c`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var t;(t=this.wallet)!=null&&t.chrome_store&&R.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&R.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&R.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&R.openHref(this.wallet.homepage,"_blank")}};gn=go([x("w3m-downloads-view")],gn);export{mt as W3mAllWalletsView,ht as W3mConnectingWcBasicView,gn as W3mDownloadsView};
