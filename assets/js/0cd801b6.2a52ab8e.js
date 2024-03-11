"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[44554],{114:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>x,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var r=t(85893),a=t(11151),i=t(74866),l=t(85162);const o={id:"elements",title:"Elements Library",sidebar_label:"Elements"},s=void 0,d={id:"elements",title:"Elements Library",description:"A component library containing the UI elements and helpers used in React Navigation. It can be useful if you're building your own navigator, or want to reuse a default functionality in your app.",source:"@site/versioned_docs/version-6.x/elements.md",sourceDirName:".",slug:"/elements",permalink:"/docs/elements",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/elements.md",tags:[],version:"6.x",frontMatter:{id:"elements",title:"Elements Library",sidebar_label:"Elements"},sidebar:"docs",previous:{title:"Developer tools",permalink:"/docs/devtools"},next:{title:"Tab View",permalink:"/docs/tab-view"}},c={},h=[{value:"Installation",id:"installation",level:2},{value:"Components",id:"components",level:2},{value:"<code>Header</code>",id:"header",level:3},{value:"<code>headerTitle</code>",id:"headertitle",level:4},{value:"<code>headerTitleAlign</code>",id:"headertitlealign",level:4},{value:"<code>headerTitleAllowFontScaling</code>",id:"headertitleallowfontscaling",level:4},{value:"<code>headerLeft</code>",id:"headerleft",level:4},{value:"<code>headerRight</code>",id:"headerright",level:4},{value:"<code>headerShadowVisible</code>",id:"headershadowvisible",level:4},{value:"<code>headerStyle</code>",id:"headerstyle",level:4},{value:"<code>headerTitleStyle</code>",id:"headertitlestyle",level:4},{value:"<code>headerLeftContainerStyle</code>",id:"headerleftcontainerstyle",level:4},{value:"<code>headerRightContainerStyle</code>",id:"headerrightcontainerstyle",level:4},{value:"<code>headerTitleContainerStyle</code>",id:"headertitlecontainerstyle",level:4},{value:"<code>headerBackgroundContainerStyle</code>",id:"headerbackgroundcontainerstyle",level:4},{value:"<code>headerTintColor</code>",id:"headertintcolor",level:4},{value:"<code>headerPressColor</code>",id:"headerpresscolor",level:4},{value:"<code>headerPressOpacity</code>",id:"headerpressopacity",level:4},{value:"<code>headerTransparent</code>",id:"headertransparent",level:4},{value:"<code>headerBackground</code>",id:"headerbackground",level:4},{value:"<code>headerStatusBarHeight</code>",id:"headerstatusbarheight",level:4},{value:"<code>HeaderBackground</code>",id:"headerbackground-1",level:3},{value:"<code>HeaderTitle</code>",id:"headertitle-1",level:3},{value:"<code>HeaderBackButton</code>",id:"headerbackbutton",level:3},{value:"<code>MissingIcon</code>",id:"missingicon",level:3},{value:"<code>PlatformPressable</code>",id:"platformpressable",level:3},{value:"<code>ResourceSavingView</code>",id:"resourcesavingview",level:3},{value:"Utilities",id:"utilities",level:2},{value:"<code>SafeAreaProviderCompat</code>",id:"safeareaprovidercompat",level:3},{value:"<code>HeaderBackContext</code>",id:"headerbackcontext",level:3},{value:"<code>HeaderShownContext</code>",id:"headershowncontext",level:3},{value:"<code>HeaderHeightContext</code>",id:"headerheightcontext",level:3},{value:"<code>useHeaderHeight</code>",id:"useheaderheight",level:3},{value:"<code>getDefaultHeaderHeight</code>",id:"getdefaultheaderheight",level:3},{value:"<code>getHeaderTitle</code>",id:"getheadertitle",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"A component library containing the UI elements and helpers used in React Navigation. It can be useful if you're building your own navigator, or want to reuse a default functionality in your app."}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(n.p,{children:["To use this package, ensure that you have ",(0,r.jsxs)(n.a,{href:"/docs/getting-started",children:[(0,r.jsx)(n.code,{children:"@react-navigation/native"})," and its dependencies (follow this guide)"]}),", then install ",(0,r.jsx)(n.a,{href:"https://github.com/react-navigation/react-navigation/tree/main/packages/elements",children:(0,r.jsx)(n.code,{children:"@react-navigation/elements"})}),":"]}),"\n",(0,r.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(l.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install @react-navigation/elements\n"})})}),(0,r.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add @react-navigation/elements\n"})})}),(0,r.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add @react-navigation/elements\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"components",children:"Components"}),"\n",(0,r.jsx)(n.h3,{id:"header",children:(0,r.jsx)(n.code,{children:"Header"})}),"\n",(0,r.jsx)(n.p,{children:"A component that can be used as a header. This is used by all the navigators by default."}),"\n",(0,r.jsx)(n.p,{children:"Usage:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { Header } from '@react-navigation/elements';\n\nfunction MyHeader() {\n  return <Header title=\"My app\" />;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To use the header in a navigator, you can use the ",(0,r.jsx)(n.code,{children:"header"})," option in the screen options:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { Header, getHeaderTitle } from '@react-navigation/elements';\n\nconst Stack = createNativeStackNavigator();\n\nfunction MyStack() {\n  return (\n    <Stack.Navigator\n      screenOptions={{\n        header: ({ options, route }) => (\n          <Header {...options} title={getHeaderTitle(options, route.name)} />\n        ),\n      }}\n    >\n      <Stack.Screen name=\"Home\" component={HomeScreen} />\n    </Stack.Navigator>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"This doesn't replicate the behavior of the header in stack and native stack navigators as the stack navigator also includes animations, and the native stack navigator header is provided by the native platform."})}),"\n",(0,r.jsx)(n.p,{children:"It accepts the following props:"}),"\n",(0,r.jsx)(n.h4,{id:"headertitle",children:(0,r.jsx)(n.code,{children:"headerTitle"})}),"\n",(0,r.jsxs)(n.p,{children:["String or a function that returns a React Element to be used by the header. Defaults to scene ",(0,r.jsx)(n.code,{children:"title"}),". When a function is specified, it receives an object containing ",(0,r.jsx)(n.code,{children:"allowFontScaling"}),", ",(0,r.jsx)(n.code,{children:"tintColor"}),", ",(0,r.jsx)(n.code,{children:"style"})," and ",(0,r.jsx)(n.code,{children:"children"})," properties. The ",(0,r.jsx)(n.code,{children:"children"})," property contains the title string."]}),"\n",(0,r.jsx)(n.h4,{id:"headertitlealign",children:(0,r.jsx)(n.code,{children:"headerTitleAlign"})}),"\n",(0,r.jsx)(n.p,{children:"How to align the header title. Possible values:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"left"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"center"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Defaults to ",(0,r.jsx)(n.code,{children:"center"})," on iOS and ",(0,r.jsx)(n.code,{children:"left"})," on Android."]}),"\n",(0,r.jsx)(n.h4,{id:"headertitleallowfontscaling",children:(0,r.jsx)(n.code,{children:"headerTitleAllowFontScaling"})}),"\n",(0,r.jsx)(n.p,{children:"Whether header title font should scale to respect Text Size accessibility settings. Defaults to false."}),"\n",(0,r.jsx)(n.h4,{id:"headerleft",children:(0,r.jsx)(n.code,{children:"headerLeft"})}),"\n",(0,r.jsx)(n.p,{children:"Function which returns a React Element to display on the left side of the header. You can use it to implement your custom left button, for example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'<Stack.Screen\n  name="Home"\n  component={HomeScreen}\n  options={{\n    headerLeft: (props) => (\n      <MyButton\n        {...props}\n        onPress={() => {\n          // Do something\n        }}\n      />\n    ),\n  }}\n/>\n'})}),"\n",(0,r.jsx)(n.h4,{id:"headerright",children:(0,r.jsx)(n.code,{children:"headerRight"})}),"\n",(0,r.jsx)(n.p,{children:"Function which returns a React Element to display on the right side of the header."}),"\n",(0,r.jsx)(n.h4,{id:"headershadowvisible",children:(0,r.jsx)(n.code,{children:"headerShadowVisible"})}),"\n",(0,r.jsx)(n.p,{children:"Whether to hide the elevation shadow (Android) or the bottom border (iOS) on the header."}),"\n",(0,r.jsx)(n.p,{children:"This is a short-hand for the following styles:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"{\n  elevation: 0,\n  shadowOpacity: 0,\n  borderBottomWidth: 0,\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If the above styles are specified in ",(0,r.jsx)(n.code,{children:"headerStyle"})," along with ",(0,r.jsx)(n.code,{children:"headerShadowVisible: false"}),", then ",(0,r.jsx)(n.code,{children:"headerShadowVisible: false"})," will take precedence."]}),"\n",(0,r.jsx)(n.h4,{id:"headerstyle",children:(0,r.jsx)(n.code,{children:"headerStyle"})}),"\n",(0,r.jsx)(n.p,{children:"Style object for the header. You can specify a custom background color here, for example."}),"\n",(0,r.jsx)(n.h4,{id:"headertitlestyle",children:(0,r.jsx)(n.code,{children:"headerTitleStyle"})}),"\n",(0,r.jsx)(n.p,{children:"Style object for the title component"}),"\n",(0,r.jsx)(n.h4,{id:"headerleftcontainerstyle",children:(0,r.jsx)(n.code,{children:"headerLeftContainerStyle"})}),"\n",(0,r.jsxs)(n.p,{children:["Customize the style for the container of the ",(0,r.jsx)(n.code,{children:"headerLeft"})," component, for example to add padding."]}),"\n",(0,r.jsx)(n.h4,{id:"headerrightcontainerstyle",children:(0,r.jsx)(n.code,{children:"headerRightContainerStyle"})}),"\n",(0,r.jsxs)(n.p,{children:["Customize the style for the container of the ",(0,r.jsx)(n.code,{children:"headerRight"})," component, for example to add padding."]}),"\n",(0,r.jsx)(n.h4,{id:"headertitlecontainerstyle",children:(0,r.jsx)(n.code,{children:"headerTitleContainerStyle"})}),"\n",(0,r.jsxs)(n.p,{children:["Customize the style for the container of the ",(0,r.jsx)(n.code,{children:"headerTitle"})," component, for example to add padding."]}),"\n",(0,r.jsxs)(n.p,{children:["By default, ",(0,r.jsx)(n.code,{children:"headerTitleContainerStyle"})," is with an absolute position style and offsets both ",(0,r.jsx)(n.code,{children:"left"})," and ",(0,r.jsx)(n.code,{children:"right"}),". This may lead to white space or overlap between ",(0,r.jsx)(n.code,{children:"headerLeft"})," and ",(0,r.jsx)(n.code,{children:"headerTitle"})," if a customized ",(0,r.jsx)(n.code,{children:"headerLeft"})," is used. It can be solved by adjusting ",(0,r.jsx)(n.code,{children:"left"})," and ",(0,r.jsx)(n.code,{children:"right"})," style in ",(0,r.jsx)(n.code,{children:"headerTitleContainerStyle"})," and ",(0,r.jsx)(n.code,{children:"marginHorizontal"})," in ",(0,r.jsx)(n.code,{children:"headerTitleStyle"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"headerbackgroundcontainerstyle",children:(0,r.jsx)(n.code,{children:"headerBackgroundContainerStyle"})}),"\n",(0,r.jsxs)(n.p,{children:["Style object for the container of the ",(0,r.jsx)(n.code,{children:"headerBackground"})," element."]}),"\n",(0,r.jsx)(n.h4,{id:"headertintcolor",children:(0,r.jsx)(n.code,{children:"headerTintColor"})}),"\n",(0,r.jsx)(n.p,{children:"Tint color for the header"}),"\n",(0,r.jsx)(n.h4,{id:"headerpresscolor",children:(0,r.jsx)(n.code,{children:"headerPressColor"})}),"\n",(0,r.jsx)(n.p,{children:"Color for material ripple (Android >= 5.0 only)"}),"\n",(0,r.jsx)(n.h4,{id:"headerpressopacity",children:(0,r.jsx)(n.code,{children:"headerPressOpacity"})}),"\n",(0,r.jsx)(n.p,{children:"Press opacity for the buttons in header (Android < 5.0, and iOS)"}),"\n",(0,r.jsx)(n.h4,{id:"headertransparent",children:(0,r.jsx)(n.code,{children:"headerTransparent"})}),"\n",(0,r.jsxs)(n.p,{children:["Defaults to ",(0,r.jsx)(n.code,{children:"false"}),". If ",(0,r.jsx)(n.code,{children:"true"}),", the header will not have a background unless you explicitly provide it with ",(0,r.jsx)(n.code,{children:"headerBackground"}),". The header will also float over the screen so that it overlaps the content underneath."]}),"\n",(0,r.jsx)(n.p,{children:"This is useful if you want to render a semi-transparent header or a blurred background."}),"\n",(0,r.jsx)(n.p,{children:"Note that if you don't want your content to appear under the header, you need to manually add a top margin to your content. React Navigation won't do it automatically."}),"\n",(0,r.jsxs)(n.p,{children:["To get the height of the header, you can use ",(0,r.jsx)(n.a,{href:"#headerheightcontext",children:(0,r.jsx)(n.code,{children:"HeaderHeightContext"})})," with ",(0,r.jsx)(n.a,{href:"https://reactjs.org/docs/context.html#contextconsumer",children:"React's Context API"})," or ",(0,r.jsx)(n.a,{href:"#useheaderheight",children:(0,r.jsx)(n.code,{children:"useHeaderHeight"})}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"headerbackground",children:(0,r.jsx)(n.code,{children:"headerBackground"})}),"\n",(0,r.jsx)(n.p,{children:"Function which returns a React Element to render as the background of the header. This is useful for using backgrounds such as an image or a gradient."}),"\n",(0,r.jsxs)(n.p,{children:["For example, you can use this with ",(0,r.jsx)(n.code,{children:"headerTransparent"})," to render a blur view to create a translucent header."]}),"\n",(0,r.jsx)("samp",{id:"header-blur"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import { BlurView } from \'expo-blur\';\n\n// ...\n\n<Stack.Screen\n  name="Home"\n  component={HomeScreen}\n  options={{\n    headerTransparent: true,\n    headerBackground: () => (\n      <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />\n    ),\n  }}\n/>;\n'})}),"\n",(0,r.jsx)(n.h4,{id:"headerstatusbarheight",children:(0,r.jsx)(n.code,{children:"headerStatusBarHeight"})}),"\n",(0,r.jsx)(n.p,{children:"Extra padding to add at the top of header to account for translucent status bar. By default, it uses the top value from the safe area insets of the device. Pass 0 or a custom value to disable the default behavior, and customize the height."}),"\n",(0,r.jsx)(n.h3,{id:"headerbackground-1",children:(0,r.jsx)(n.code,{children:"HeaderBackground"})}),"\n",(0,r.jsxs)(n.p,{children:["A component containing the styles used in the background of the header, such as the background color and shadow. It's the default for ",(0,r.jsx)(n.a,{href:"#headerbackground",children:(0,r.jsx)(n.code,{children:"headerBackground"})}),". It accepts the same props as a ",(0,r.jsx)(n.a,{href:"https://reactnative.dev/docs/view",children:(0,r.jsx)(n.code,{children:"View"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Usage:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"<HeaderBackground style={{ backgroundColor: 'tomato' }} />\n"})}),"\n",(0,r.jsx)(n.h3,{id:"headertitle-1",children:(0,r.jsx)(n.code,{children:"HeaderTitle"})}),"\n",(0,r.jsxs)(n.p,{children:["A component used to show the title text in header. It's the default for ",(0,r.jsx)(n.a,{href:"#headertitle",children:(0,r.jsx)(n.code,{children:"headerTitle"})}),". It accepts the same props as a ",(0,r.jsx)(n.a,{href:"https://reactnative.dev/docs/Text",children:(0,r.jsx)(n.code,{children:"Text"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The color of title defaults to the ",(0,r.jsx)(n.a,{href:"/docs/themes",children:"theme text color"}),". You can override it by passing a ",(0,r.jsx)(n.code,{children:"tintColor"})," prop."]}),"\n",(0,r.jsx)(n.p,{children:"Usage:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"<HeaderTitle>Hello</HeaderTitle>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"headerbackbutton",children:(0,r.jsx)(n.code,{children:"HeaderBackButton"})}),"\n",(0,r.jsxs)(n.p,{children:["A component used to show the back button header. It's the default for ",(0,r.jsx)(n.a,{href:"#headerleft",children:(0,r.jsx)(n.code,{children:"headerLeft"})})," in the ",(0,r.jsx)(n.a,{href:"/docs/stack-navigator",children:"stack navigator"}),". It accepts the following props:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"disabled"})," - Boolean which controls Whether the button is disabled."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onPress"})," - Callback to call when the button is pressed."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pressColor"})," - Color for material ripple (Android >= 5.0 only)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"backImage"})," - Function which returns a React Element to display custom image in header's back button."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"tintColor"})," - Tint color for the header."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"label"})," - Label text for the button. Usually the title of the previous screen. By default, this is only shown on iOS."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"truncatedLabel"})," - Label text to show when there isn't enough space for the full label."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"labelVisible"})," - Whether the label text is visible. Defaults to ",(0,r.jsx)(n.code,{children:"true"})," on iOS and ",(0,r.jsx)(n.code,{children:"false"})," on Android."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"labelStyle"})," - Style object for the label."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"allowFontScaling"})," - Whether label font should scale to respect Text Size accessibility settings."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onLabelLayout"})," - Callback to trigger when the size of the label changes."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"screenLayout"})," - Layout of the screen."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"titleLayout"})," - Layout of the title element in the header."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"canGoBack"})," - Boolean to indicate whether it's possible to navigate back in stack."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"accessibilityLabel"})," - Accessibility label for the button for screen readers."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"testID"})," - ID to locate this button in tests."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"style"})," - Style object for the button."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Usage:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"<HeaderBackButton label=\"Hello\" onPress={() => console.log('back pressed')} />\n"})}),"\n",(0,r.jsx)(n.h3,{id:"missingicon",children:(0,r.jsx)(n.code,{children:"MissingIcon"})}),"\n",(0,r.jsx)(n.p,{children:"A component that renders a missing icon symbol. It can be used as a fallback for icons to show that there's a missing icon. It accepts the following props:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"color"})," - Color of the icon."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"size"})," - Size of the icon."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"style"})," - Additional styles for the icon."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"platformpressable",children:(0,r.jsx)(n.code,{children:"PlatformPressable"})}),"\n",(0,r.jsxs)(n.p,{children:["A component which provides an abstraction on top of ",(0,r.jsx)(n.a,{href:"https://reactnative.dev/docs/Pressable",children:(0,r.jsx)(n.code,{children:"Pressable"})})," to handle platform differences. In addition to ",(0,r.jsx)(n.code,{children:"Pressable"}),"'s props, it accepts following additional props:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pressColor"})," - Color of material ripple on Android when it's pressed"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pressOpacity"})," - Opacity when it's pressed if material ripple isn't supported by the platform"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"resourcesavingview",children:(0,r.jsx)(n.code,{children:"ResourceSavingView"})}),"\n",(0,r.jsxs)(n.p,{children:["A component which aids in improving performance for inactive screens by utilizing ",(0,r.jsx)(n.a,{href:"https://reactnative.dev/docs/view#removeclippedsubviews",children:(0,r.jsx)(n.code,{children:"removeClippedSubviews"})}),". It accepts a ",(0,r.jsx)(n.code,{children:"visible"})," prop to indicate whether a screen should be clipped."]}),"\n",(0,r.jsx)(n.p,{children:"Usage:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"<ResourceSavingView visible={0}>{/* Content */}</ResourceSavingView>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"utilities",children:"Utilities"}),"\n",(0,r.jsx)(n.h3,{id:"safeareaprovidercompat",children:(0,r.jsx)(n.code,{children:"SafeAreaProviderCompat"})}),"\n",(0,r.jsxs)(n.p,{children:["A wrapper over the ",(0,r.jsx)(n.code,{children:"SafeAreaProvider"})," component from ",(0,r.jsx)(n.a,{href:"https://github.com/th3rdwave/react-native-safe-area-context",children:"`react-native-safe-area-context"})," which includes initial values."]}),"\n",(0,r.jsx)(n.p,{children:"Usage:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"<SafeAreaProviderCompat>{/* Your components */}</SafeAreaProviderCompat>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"headerbackcontext",children:(0,r.jsx)(n.code,{children:"HeaderBackContext"})}),"\n",(0,r.jsx)(n.p,{children:"React context that can be used to get the back title of the parent screen."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { HeaderBackContext } from '@react-navigation/elements';\n\n// ...\n\n<HeaderBackContext.Consumer>\n  {(headerBack) => {\n    if (headerBack) {\n      const backTitle = headerBack.title;\n\n      /* render something */\n    }\n\n    /* render something */\n  }}\n</HeaderBackContext.Consumer>;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"headershowncontext",children:(0,r.jsx)(n.code,{children:"HeaderShownContext"})}),"\n",(0,r.jsx)(n.p,{children:"React context that can be used to check if a header is visible in a parent screen."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { HeaderShownContext } from '@react-navigation/elements';\n\n// ...\n\n<HeaderShownContext.Consumer>\n  {(headerShown) => {\n    /* render something */\n  }}\n</HeaderShownContext.Consumer>;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"headerheightcontext",children:(0,r.jsx)(n.code,{children:"HeaderHeightContext"})}),"\n",(0,r.jsx)(n.p,{children:"React context that can be used to get the height of the nearest visible header in a parent screen."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { HeaderHeightContext } from '@react-navigation/elements';\n\n// ...\n\n<HeaderHeightContext.Consumer>\n  {(headerHeight) => {\n    /* render something */\n  }}\n</HeaderHeightContext.Consumer>;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"useheaderheight",children:(0,r.jsx)(n.code,{children:"useHeaderHeight"})}),"\n",(0,r.jsx)(n.p,{children:"Hook that returns the height of the nearest visible header in the parent screen."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { useHeaderHeight } from '@react-navigation/elements';\n\n// ...\n\nconst headerHeight = useHeaderHeight();\n"})}),"\n",(0,r.jsx)(n.h3,{id:"getdefaultheaderheight",children:(0,r.jsx)(n.code,{children:"getDefaultHeaderHeight"})}),"\n",(0,r.jsx)(n.p,{children:"Helper that returns the default header height. It takes the following parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"layout"})," - Layout of the screen, i.e. an object containing ",(0,r.jsx)(n.code,{children:"height"})," and ",(0,r.jsx)(n.code,{children:"width"})," properties."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"statusBarHeight"})," - height of the statusbar"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"getheadertitle",children:(0,r.jsx)(n.code,{children:"getHeaderTitle"})}),"\n",(0,r.jsx)(n.p,{children:"Helper that returns the title text to use in header. It takes the following parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"options"})," - The options object of the screen."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fallback"})," - Fallback title string if no title was found in options."]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var r=t(86010);const a={tabItem:"tabItem_Ymn6"};var i=t(85893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(67294),a=t(86010),i=t(12466),l=t(16550),o=t(20469),s=t(91980),d=t(67392),c=t(50012);function h(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function x(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=u(e),[l,s]=(0,r.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const a=null!=(n=r.find((e=>e.default)))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[d,h]=p({queryString:t,groupId:a}),[j,g]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[a,i]=(0,c.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),f=(()=>{const e=null!=d?d:j;return x({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);s(e),h(e),g(e)}),[h,g,i]),tabValues:i}}var g=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(85893);function v(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const n=e.currentTarget,t=s.indexOf(n),a=o[t].value;a!==r&&(d(n),l(a))},h=e=>{var n;let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var r;const n=s.indexOf(e.currentTarget)+1;t=null!=(r=s[n])?r:s[0];break}case"ArrowLeft":{var a;const n=s.indexOf(e.currentTarget)-1;t=null!=(a=s[n])?a:s[s.length-1];break}}null==(n=t)||n.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>s.push(e),onKeyDown:h,onClick:c,...i,className:(0,a.Z)("tabs__item",f.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===n}),children:null!=t?t:n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=j(e);return(0,m.jsxs)("div",{className:(0,a.Z)("tabs-container",f.tabList),children:[(0,m.jsx)(v,{...e,...n}),(0,m.jsx)(b,{...e,...n})]})}function w(e){const n=(0,g.Z)();return(0,m.jsx)(y,{...e,children:h(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var r=t(67294);const a={},i=r.createContext(a);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);