import render from '../../reuseable/render';
import profileIcon from '../../reuseable/profile';
import createForm from '../../reuseable/form';
import textInput from '../../reuseable/textInput';
import label from '../../reuseable/labelTextInput';
import btn from '../../reuseable/button';
import checkbox from '../../reuseable/checkbox';
import textLink from '../../reuseable/textLink';
import { getImageUrl } from '../../reuseable/helpers';

import { words } from '../../langs/index';
import { routes } from '../../routes';

import './style.scss';

const bemElem = (bem: string) => 'user' + '__' + bem;

const userPage = () => {
  const avatar = profileIcon({
    iconLink: getImageUrl('/pictures/test_ico.png'),
  });
  avatar.className = bemElem('avatar');

  const changeAvatarLabel = label({ forAttr: 'change-avatar' });
  const changeAvatarInput = textInput({
    name: 'change-avatar',
    type: 'file',
  });
  changeAvatarLabel.textContent = words.CHANGE_AVATAR;
  changeAvatarInput.multiple = true;
  changeAvatarInput.accept = 'imgae/png';
  changeAvatarLabel.className = bemElem('input-change-avatar');
  changeAvatarLabel.appendChild(avatar);
  changeAvatarLabel.appendChild(changeAvatarInput);

  const header = document.createElement('h2');
  header.textContent = words.PROFILE;
  header.className = bemElem('header');

  const changeAvatar = document.createElement('div');
  changeAvatar.className = bemElem('change-avatar-wrapper');
  changeAvatar.appendChild(header);
  changeAvatar.appendChild(changeAvatarLabel);

  const headerContainer = document.createElement('div');
  headerContainer.className = bemElem('header-container');
  headerContainer.appendChild(avatar);
  headerContainer.appendChild(changeAvatar);

  const firstNameLabel = label({ forAttr: 'first_name' });
  const firstNameInput = textInput({
    name: 'first_name',
    type: 'text',
    placeHolder: words.FIRST_NAME,
  });
  firstNameInput.className = bemElem('input-name');
  firstNameInput.tabIndex = 1;
  firstNameLabel.appendChild(firstNameInput);

  const secondNameLabel = label({ forAttr: 'second_name' });
  const secondNameInput = textInput({
    name: 'second_name',
    type: 'text',
    placeHolder: words.SECOND_NAME,
  });
  secondNameInput.className = bemElem('input-name');
  secondNameLabel.appendChild(secondNameInput);

  const userNameContainer = document.createElement('div');
  userNameContainer.className = bemElem('username-container');
  userNameContainer.appendChild(firstNameLabel);
  userNameContainer.appendChild(secondNameLabel);

  const displyNameLabel = label({ forAttr: 'dispalay-name' });
  const displyNameInput = textInput({
    name: 'dispalay-name',
    type: 'text',
    placeHolder: words.DISPLAY_NAME,
  });
  displyNameInput.className = bemElem('input');
  displyNameLabel.appendChild(displyNameInput);

  const loginLabel = label({ forAttr: 'login' });
  const loginInput = textInput({
    name: 'login',
    type: 'text',
    placeHolder: words.LOGIN_PLACEHOLDER,
  });
  loginInput.className = bemElem('input');
  loginLabel.appendChild(loginInput);

  const emainLabel = label({ forAttr: 'email' });
  const emailInput = textInput({
    name: 'email',
    type: 'email',
    placeHolder: words.EMAIL,
  });
  emailInput.className = bemElem('input');
  emainLabel.appendChild(emailInput);

  const passwordLable = label({ forAttr: 'old-password' });
  const passwordInput = textInput({
    name: 'old-password',
    type: 'password',
    placeHolder: words.OLD_PASSWORD,
  });
  passwordInput.className = bemElem('input');
  passwordLable.appendChild(passwordInput);

  const confirmPasswordLable = label({ forAttr: 'new-password' });
  const confirmPasswordInput = textInput({
    name: 'new-password',
    type: 'confirm-password',
    placeHolder: words.NEW_PASSWORD,
  });
  confirmPasswordInput.className = bemElem('input');
  confirmPasswordLable.appendChild(confirmPasswordInput);

  const phoneLabel = label({ forAttr: 'phone' });
  const phoneInput = textInput({
    name: 'phone',
    type: 'phone',
    placeHolder: words.PHONE,
  });
  phoneInput.className = bemElem('input');
  phoneLabel.appendChild(phoneInput);

  const policyLabel = label({ forAttr: 'policy' });
  policyLabel.className = bemElem('policy-label');
  policyLabel.textContent = words.CONFIRM_POLICY;
  const policyInput = checkbox({ name: 'policy', id: 'policy' });
  policyInput.className = bemElem('policy-input');
  const policyLink = textLink({ href: routes.policy(), text: words.PRIVACY });
  policyLink.className = bemElem('policy-link');

  const policyWrapper = document.createElement('div');
  policyWrapper.className = bemElem('policy');
  policyWrapper.appendChild(policyInput);
  policyWrapper.appendChild(policyLabel);
  policyWrapper.appendChild(policyLink);

  const applyChangesBtn = btn({ value: words.APPLY_CHANGES, type: 'button' });
  applyChangesBtn.className = bemElem('apply-changes-button');

  const back = textLink({ href: document.referrer, text: words.TO_HOME });
  back.className = bemElem('back-navigate');

  const container = document.createElement('div');
  container.appendChild(back);

  const siginupForm = createForm({
    chidlren: [
      userNameContainer,
      displyNameLabel,
      loginLabel,
      emainLabel,
      passwordLable,
      confirmPasswordLable,
      phoneLabel,
      policyWrapper,
      applyChangesBtn,
      back,
    ],
  });
  siginupForm.className = bemElem('wrapper');

  const userProfileContainer = document.createElement('div');
  userProfileContainer.appendChild(headerContainer);
  userProfileContainer.appendChild(siginupForm);

  return render(userProfileContainer);
};

export default userPage;
