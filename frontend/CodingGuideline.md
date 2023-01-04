# composition api vue option 정의 순서
## 정의 이유
- options api와 달리 code formatter의 도움을 받을 수 없음, 나중에 lint나 prettier에서 지원되면 적용 요망
- options api와 비교해 composition api의 장점은 논리적 그룹 단위(logical concern)로 정의하는 것이 가능
 - options api는 opion별로 정의 구역이 고정이 였다면 composition api는 보다 유연하게 논리적 그룹을 묶어서 선언할 수 있음.
 - 논리적 그룹 분류 항목 : data, watch, computed, methods
  - props와 emits는 component in/out을 담당하므로 항목에서 제외하였다.
- 논리적 그룹단위 별로 정의 순서를 꼭 지켜서 사용!
## 순서
1. props
2. emits
3. logical concern group
 - data
 - watch
 - computed
 - methods
  - event 
  - function

# naming
1. event
- 'on' prefix 사용
- 일반 function 과 구분하기 위함 
- 완료를 구분하여 naming -> 과거분사를 사용
- ex) onComplete, onCompleted
2. emits
- 동사로 표기
- ex) complete, cancel
- 대상을 표시 할 경우, **[대상][동사]**로 표기, **camelCase 사용**
- ex) itemChanged, itemChange, itemChecked  
3. computed
- 'c' prefix 사용
4. props: event callback
- emits와 동일한 naming 사용
 - event와 naming 충돌을 피하기 위함. 
3. 논외 대상
- props : prefix 사용을 고려해봤지만, 사용측에서도 prefix를 사용해야 하므로 논외



