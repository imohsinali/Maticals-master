import Link from 'next/link';
import { Trans } from 'next-i18next';
import { useForm } from 'react-hook-form';

import TextField from '~/core/ui/TextField';
import Button from '~/core/ui/Button';
import If from '~/core/ui/If';

const EmailPasswordSignInForm: React.FCC<{
  onSubmit: (params: { email: string; password: string }) => unknown;

  loading: boolean;
}> = ({ onSubmit, loading }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const emailControl = register('email', { required: true });
  const passwordControl = register('password', { required: true });

  return (
    <form className={'w-full'} onSubmit={handleSubmit(onSubmit)}>
      <div className={'flex-col space-y-4'}>
        <TextField>
          <TextField.Label>
            <Trans i18nKey={'common:emailAddress'} />

            <TextField.Input
              data-cy={'email-input'}
              required
              type="email"
              placeholder={'your@email.com'}
              innerRef={emailControl.ref}
              onBlur={emailControl.onBlur}
              onChange={emailControl.onChange}
              name={emailControl.name}
            />
          </TextField.Label>
        </TextField>

        <TextField>
          <TextField.Label>
            <Trans i18nKey={'common:password'} />

            <TextField.Input
              required
              data-cy={'password-input'}
              type="password"
              placeholder={''}
              innerRef={passwordControl.ref}
              onBlur={passwordControl.onBlur}
              onChange={passwordControl.onChange}
              name={passwordControl.name}
            />

            <div className={'py-0.5 text-xs'}>
              <Link href={'/auth/password-reset'} className={'hover:underline'}>
                <Trans i18nKey={'auth:passwordForgottenQuestion'} />
              </Link>
            </div>
          </TextField.Label>
        </TextField>

        <div>
          <Button
            size={'large'}
            className={'w-full'}
            color={'primary'}
            data-cy="auth-submit-button"
            type="submit"
            loading={loading}
          >
            <If
              condition={loading}
              fallback={<Trans i18nKey={'auth:signIn'} />}
            >
              <Trans i18nKey={'auth:signingIn'} />
            </If>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default EmailPasswordSignInForm;
